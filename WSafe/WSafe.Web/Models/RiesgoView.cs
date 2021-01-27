using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace WSafe.Web.Models
{
    public class RiesgoView
    {
        public int ÌdentificacionRiesgoID { get; set; }
        public int EvaluacionRiesgoID { get; set; }
        public int ÌntervencionRiesgoID { get; set; }
        public int ÌnspeccionID { get; set; }
        public IEnumerable<SelectListItem> Inspecciones { get; set; }
        public int SeguimientoID { get; set; }
        public IEnumerable<SelectListItem> Seguimientos { get; set; }
    }
}
