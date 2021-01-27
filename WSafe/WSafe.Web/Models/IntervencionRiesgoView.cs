using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using WSafe.Web.Data;

namespace WSafe.Web.Models
{
    public class IntervencionRiesgoView : IntervencionRiesgo
    {
        public int ControlIngriaID { get; set; }
        public IEnumerable<SelectListItem> ControlesIngria { get; set; }
        public int ControlAdmon { get; set; }
        public IEnumerable<SelectListItem> ControlesAdmon { get; set; }

    }
}
