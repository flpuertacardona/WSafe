using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using WSafe.Web.Data;

namespace WSafe.Web.Models
{
    public class SedeView : Sede
    {
        [Required(ErrorMessage = "El campo {0} es requerido.")]
        [Display(Name = "Trabajador")]
        [Range(1, int.MaxValue, ErrorMessage = "Debes seleccionar un trabajador.")]
        public int TrabajadorID { get; set; }
        public IEnumerable<SelectListItem> Trabajadores { get; set; }

    }
}
