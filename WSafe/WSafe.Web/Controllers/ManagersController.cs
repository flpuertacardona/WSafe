using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using WSafe.Web.Data;
using WSafe.Web.Helpers;
using WSafe.Web.Models;

namespace MyLeasing.Web.Controllers
{
    [Authorize(Roles = "Manager")]
    public class ManagersController : Controller
    {
        private readonly DataContext _dataContext;
        private readonly IUserHelper _userHelper;
        private readonly IMailHelper _mailHelper;

        public ManagersController(
            DataContext dataContext,
            IUserHelper userHelper,
            IMailHelper mailHelper)
        {
            _dataContext = dataContext;
            _userHelper = userHelper;
            _mailHelper = mailHelper;
        }

        public IActionResult Index()
        {
            return View(_dataContext.Managers.Include(m => m.User));
        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var manager = await _dataContext.Managers
                .Include(o => o.User)
                .FirstOrDefaultAsync(o => o.ID == id.Value);
            if (manager == null)
            {
                return NotFound();
            }

            return View(manager);
        }

        public IActionResult Create()
        {
            return View(new AddUserView { RoleId = 9 });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(AddUserView view)
        {
            if (ModelState.IsValid)
            {
                var user = await _userHelper.AddUser(view, "Manager");
                if (user == null)
                {
                    ModelState.AddModelError(string.Empty, "This email is already used.");
                    return View(view);
                }

                var manager = new Manager { User = user };

                _dataContext.Managers.Add(manager);
                await _dataContext.SaveChangesAsync();

                var myToken = await _userHelper.GenerateEmailConfirmationTokenAsync(user);
                var tokenLink = Url.Action("ConfirmEmail", "Account", new
                {
                    userid = user.Id,
                    token = myToken
                }, protocol: HttpContext.Request.Scheme);

                _mailHelper.SendMail(view.Username, "Email confirmation", $"<h1>Email Confirmation</h1>" +
                    $"To allow the user, " +
                    $"plase click in this link:</br></br><a href = \"{tokenLink}\">Confirm Email</a>");

                return RedirectToAction(nameof(Index));
            }

            return View(view);
        }

        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var manager = await _dataContext.Managers
                .Include(m => m.User)
                .FirstOrDefaultAsync(m => m.ID == id);
            if (manager == null)
            {
                return NotFound();
            }

            var view = new EditUserView
            {
                Address = manager.User.Address,
                Document = manager.User.Document,
                FirstName = manager.User.FirstName,
                ID = manager.ID,
                LastName = manager.User.LastName,
                PhoneNumber = manager.User.PhoneNumber
            };

            return View(view);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(EditUserView view)
        {
            if (ModelState.IsValid)
            {
                var manager = await _dataContext.Managers
                    .Include(m => m.User)
                    .FirstOrDefaultAsync(o => o.ID == view.ID);

                manager.User.Document = view.Document;
                manager.User.FirstName = view.FirstName;
                manager.User.LastName = view.LastName;
                manager.User.Address = view.Address;
                manager.User.PhoneNumber = view.PhoneNumber;

                await _userHelper.UpdateUserAsync(manager.User);
                return RedirectToAction(nameof(Index));
            }

            return View(view);
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var manager = await _dataContext.Managers
                .Include(m => m.User)
                .FirstOrDefaultAsync(m => m.ID == id);
            if (manager == null)
            {
                return NotFound();
            }

            _dataContext.Managers.Remove(manager);
            await _dataContext.SaveChangesAsync();
            await _userHelper.DeleteUserAsync(manager.User.Email);
            return RedirectToAction(nameof(Index));
        }
    }
}