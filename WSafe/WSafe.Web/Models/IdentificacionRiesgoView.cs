using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WSafe.Web.Data;

namespace WSafe.Web.Models
{
    public class IdentificacionRiesgoView : IdentificacionRiesgo
    {
        public int SedeID { get; set; }
        public IEnumerable<SelectListItem> Sedes { get; set; }

        public int CentroID { get; set; }
        public IEnumerable<SelectListItem> Centros { get; set; }
        public int LugarID { get; set; }
        public IEnumerable<SelectListItem> Lugares { get; set; }
        public int ProcesoID { get; set; }
        public IEnumerable<SelectListItem> Procesos { get; set; }
        public int ActividadID { get; set; }
        public IEnumerable<SelectListItem> Actividades { get; set; }
        public int TareaID { get; set; }
        public IEnumerable<SelectListItem> Tareas { get; set; }
        public int CargoID { get; set; }
        public IEnumerable<SelectListItem> Cargos { get; set; }
        public int ImagenActoID { get; set; }
        public IEnumerable<SelectListItem> Imagenes { get; set; }

    }
}
