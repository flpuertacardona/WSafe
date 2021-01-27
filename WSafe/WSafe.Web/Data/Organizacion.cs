using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WSafe.Web.Data
{
    public class Organizacion
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [MaxLength(12, ErrorMessage = "La longitud máxima del campo {0}, es {1}")]
        public string Nit { get; set; }
        [MaxLength(50, ErrorMessage = "La longitud máxima del campo {0}, es {1}")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Razón Social")]
        public string RazonSocial { get; set; }
        [MaxLength(50, ErrorMessage = "La longitud máxima del campo {0}, es {1}")]
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Direccion { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public Municipio Municipio { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public Departamento Departamento { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [MaxLength(25, ErrorMessage = "La longitud máxima del campo {0}, es {1}")]
        public string Telefono { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [MaxLength(50, ErrorMessage = "La longitud máxima del campo {0}, es {1}")]
        public string ARL { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string NivelRiesgo { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [MaxLength(12, ErrorMessage = "La longitud máxima del campo {0}, es {1}")]
        [Display(Name = "Documento Representante Legal")]
        public string DocumentoRepresentante { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [MaxLength(50, ErrorMessage = "La longitud máxima del campo {0}, es {1}")]
        [Display(Name = "Actividad Económica")]
        public string ActividadEconomica { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Productos / Servicios")]
        public string ProductosServicios { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Mision { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Vision { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Objetivos { get; set; }

        [Display(Name = "Imagen mapa procesos")]
        public string MapaUrl { get; set; }
        // TODO: Change the path when publish
        public string MapaFullPath => string.IsNullOrEmpty(MapaUrl)
            ? null
            : $"https://wsafe.azurewebsites.net{MapaUrl.Substring(1)}";
        [Display(Name = "Imagen organigrama")]
        public string OrganigramaUrl { get; set; }

        // TODO: Change the path when publish
        public string OrganigramaFullPath => string.IsNullOrEmpty(OrganigramaUrl)
            ? null
            : $"https://wsafe.azurewebsites.net{OrganigramaUrl.Substring(1)}";

        [MaxLength(50, ErrorMessage = "La longitud máxima del campo {0}, es {1}")]
        [Display(Name = "Turnos Personal Administrativo")]
        public string TurnosAdministrativo { get; set; }
        [MaxLength(50, ErrorMessage = "La longitud máxima del campo {0}, es {1}")]
        [Display(Name = "Turnos Personal Operativo")]
        public string TurnosOperativo { get; set; }
        public ICollection<Sede> Sedes { get; set; }
        public ICollection<Centro> Centros { get; set; }
        public ICollection<Proceso> Procesos { get; set; }
        public ICollection<Cargo> Cargos { get; set; }
        public ICollection<Lugar> Lugares { get; set; }

    }
}
