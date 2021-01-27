using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSafe.Web.Data
{
    public class Riesgo
    {
        public int ID { get; set; }
        public IdentificacionRiesgo IdentificacionRiesgo { get; set; }
        public EvaluacionRiesgo EvaluacionRiesgo { get; set; }
        public IntervencionRiesgo IntervencionRiesgo { get; set; }
        public List<Inspeccion> Inspecciones { get; set; }
        public List<SeguimientoRiesgo> Seguiminetos { get; set; }

    }
}
