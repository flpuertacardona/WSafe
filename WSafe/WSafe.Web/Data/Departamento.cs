﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WSafe.Web.Data
{
    public class Departamento
    {
        public int ID { get; set; }
        [MaxLength(50,ErrorMessage ="La longitud máxima del campo {0}, es {1}")]
        public string Nombre { get; set; }
        public int PaisID { get; set; }
        public List<Municipio> Municipios { get; set; }

    }
}
