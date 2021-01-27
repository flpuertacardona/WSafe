using System.Collections.Generic;

namespace WSafe.Web.Data
{
    public class IntervencionRiesgo
    {
        public int ID { get; set; }
        public string Eliminacion { get; set; }
        public string Sustitucion { get; set; }
        public ICollection<ControlIngria> ControlesIngria { get; set; }
        public ICollection<ControlAdmon> ControlesAdmon { get; set; }
        public string EPP { get; set; }
    }
}
