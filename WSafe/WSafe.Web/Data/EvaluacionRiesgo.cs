namespace WSafe.Web.Data
{
    public class EvaluacionRiesgo
    {
        public int ÌD { get; set; }
        public int NivelDeficiencia { get; set; }
        public int NivelExposicion { get; set; }
        public int NivelProbabilidad { get; set; }
        public int NivelConsecuencias { get; set; }
        public int NivelRiesgo { get; set; }
        public int TrabajadoresExpuestos { get; set; }
        public bool AgenteCancerigeno { get; set; }
        public string PeorConsecuencia { get; set; }
        public bool RequisitoLegal { get; set; }
    }
}
