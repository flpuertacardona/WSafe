using System;
using System.ComponentModel.DataAnnotations;

namespace WSafe.Web.Data
{
    public class Trabajador
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Primer Apellido")]
        public string PrimerApellido { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Segundo Apellido")]
        public string SegundoApellido { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Nombres { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Documento { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public DateTime FechaNacimiento { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Email { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public Sede Sede { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public Genero Genero { get; set; }
        public EstadoCivil EstadoCivil { get; set; }
        [Required]
        public TiposVinculacion TipoVinculacion { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public Cargo Cargo { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public Centro Centro { get; set; }
        public DateTime FechaIngreso { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string EPS { get; set; }
        public string AFP { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string ARL { get; set; }
        public string Direccion { get; set; }
        public string Telefonos { get; set; }
        public bool AltoRiesgo { get; set; }
        public string ActividadAltoRiesgo { get; set; }

    }
}
