using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace WSafe.Web.Helpers
{
    public interface IImageHelper
    {
        Task<string> UploadImageAsync(IFormFile imageFile);

    }
}
