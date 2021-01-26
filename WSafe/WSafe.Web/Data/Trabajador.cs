using System;
using System.ComponentModel.DataAnnotations;

namespace WSafe.Web.Data
{
    public class Trabajador
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [MaxLength(25,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        [Display(Name = "Primer Apellido")]
        public string PrimerApellido { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [MaxLength(25,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        [Display(Name = "Segundo Apellido")]
        public string SegundoApellido { get; set; }
        [MaxLength(25,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Nombres { get; set; }
        [MaxLength(12,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Documento { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public DateTime FechaNacimiento { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [EmailAddress]
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
        [MaxLength(50,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string EPS { get; set; }
        [MaxLength(50,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        public string AFP { get; set; }
        [MaxLength(50,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string ARL { get; set; }
        [MaxLength(50,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        public string Direccion { get; set; }
        [MaxLength(25,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        public string Telefonos { get; set; }
        public bool AltoRiesgo { get; set; }
        [MaxLength(50,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        public string ActividadAltoRiesgo { get; set; }
    }
}
