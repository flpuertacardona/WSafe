using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace WSafe.Web.Helpers
{
    public class CombosHelper : ICombosHelper
    {
        public IEnumerable<SelectListItem> GetComboRoles()
        {
            var list = new List<SelectListItem>
            {
                new SelectListItem { Value = "0", Text = "(Seleccione un rol...)" },
                new SelectListItem { Value = "1", Text = "Lider" },
                new SelectListItem { Value = "2", Text = "Copasst" },
                new SelectListItem { Value = "3", Text = "Brigadista" },
                new SelectListItem { Value = "4", Text = "Gerente" },
                new SelectListItem { Value = "5", Text = "Auditor" },
                new SelectListItem { Value = "6", Text = "Jefe" },
                new SelectListItem { Value = "7", Text = "Supervisor" },
                new SelectListItem { Value = "8", Text = "Trabajador" }
            };

            return list;
        }
    }
}
