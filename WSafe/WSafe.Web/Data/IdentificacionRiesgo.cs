using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSafe.Web.Data
{
    public class IdentificacionRiesgo
    {
        public int ID { get; set; }
        public Sede Sede { get; set; }
        public Centro Centro { get; set; }
        public Lugar Lugar { get; set; }
        public Cargo Cargo { get; set; }
        public Proceso Proceso { get; set; }
        public Actividad Actividad { get; set; }
        public Tarea Tarea { get; set; }
        public string TipoVinculacion { get; set; }
        public bool Rutinaria { get; set; }
        public string Descripcion { get; set; }
        public string ClasePeligro { get; set; }
        public string TipoPeligro { get; set; }
        public string ActoInseguro { get; set; }
        public string CondicionInsegura { get; set; }
        public string EfectosPosibles { get; set; }
        public string TiempoExposicion { get; set; }
        public string FrecuenciaExposicion { get; set; }
        public string ControlEliminacion { get; set; }
        public string ControlSustitucion { get; set; }
        public string ControlIngenieria { get; set; }
        public string ControlAdministrativo { get; set; }
        public string ControlSeñalizacion { get; set; }
        public string ControlEPP { get; set; }

    }
}
