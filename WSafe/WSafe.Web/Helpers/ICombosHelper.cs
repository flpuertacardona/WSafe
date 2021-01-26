using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace WSafe.Web.Helpers
{
    public interface ICombosHelper
    {
        IEnumerable<SelectListItem> GetComboRoles();
    }
}
