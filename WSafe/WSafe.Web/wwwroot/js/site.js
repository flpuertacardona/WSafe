// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

<script>

    function calcularRiesgos(modelo){
        foreach(var r in modelo)
        {
            for (var i = 0; i < 19 {
                var (r+"i") = 0
            }

            if (r.NP >= 24 && r.NP <= 40 &&  r.NC == 100) {
                r1++
            }
            if (r.NP >= 10 && r.NP <= 20 &&  r.NC == 100) {
                r2++
            }
            if (r.NP >= 6 && r.NP <= 8 &&  r.NC == 100) {
                r3++
            }
            if (r.NP >= 2 && r.NP <= 4 &&  r.NC == 100) {
                r4++
            }
            if (r.NP >= 24 && r.NP <= 40 &&  r.NC == 60) {
                r5++
            }
            if (r.NP >= 10 && r.NP <= 20 &&  r.NC == 60) {
                r6++
            }
            if (r.NP >= 6 && r.NP <= 8 &&  r.NC == 60) {
                r7++
            }
            if (r.NP >= 3 && r.NP <= 4 &&  r.NC == 60) {
                r8++
            }
            if (r.NP >= 2 && r.NP < 3 &&  r.NC == 60) {
                r9++
            }
            if (r.NP >= 24 && r.NP <= 40 &&  r.NC == 25) {
                r10++
            }
            if (r.NP >= 10 && r.NP <= 20 &&  r.NC == 25) {
                r11++
            }
            if (r.NP >= 6 && r.NP <= 8 &&  r.NC == 25) {
                r12++
            }
            if (r.NP >= 2 && r.NP <= 4 &&  r.NC == 25) {
                r13++
            }
            if (r.NP >= 24 && r.NP <= 40 &&  r.NC == 10) {
                r14++
            }
            if (r.NP > 15 && r.NP <= 20 &&  r.NC == 10) {
                r15++
            }
            if (r.NP >= 10 && r.NP <= 15 &&  r.NC == 10) {
                r16++
            }
            if (r.NP >= 6 && r.NP <= 8 &&  r.NC == 10) {
                r17++
            }
            if (r.NP >= 2 && r.NP <= 4 &&  r.NC == 100) {
                r18++
            }
        }
    }

    function mapaRiesgos()
    {
        var mapaRiesgo = [
            {id: 1, name: "Toda la Organización" },
            {id: 2, name: "Sede" },
            {id: 3, name: "Proceso" }
        ]

    }

    function efectosPosibles()
    {
        var efectoPosible = [
            { id: 1, name: "Daño Leve" },
            { id: 2, name: "Daño Medio" },
            {id: 3, name: "Daño Extremo" }
        ]

    }

    function clasificacionPeligros()
    {
        var clasePeligros = [
            {id: 1, name: "Fisico"},
            {id: 2, name: "Quimico"},
            {id: 3, name: "Bilogico"},
            {id: 4, name: "Biomecanico"},
            {id: 5, name: "Electricos"},
            {id: 6, name: "Fuego Explosion"},
            {id: 7, name: "Psicosocial"},
            {id: 8, name: "Condiciones seguridad"},
            {id: 9, name: "Desatres Naturales"}
        ]

        var categorias = [
            {id: 1, name: "Ruido", idClasePeligro:1},
            {id: 2, name: "Iluminacion", idClasePeligro: 1 },
            {id: 3, name: "Vibración", idClasePeligro: 1 },
            {id: 4, name: "Temperaturas Extremas", idClasePeligro: 1 },
            {id: 5, name: "Presión atmosferica", idClasePeligro: 1 },
            {id: 6, name: "Radiaciones Ionizantes", idClasePeligro: 1 },
            {id: 7, name: "Radiaciones No Ionozantes", idClasePeligro: 1 },
            {id: 8, name: "Polvos orgánicos, inorgánicos", idClasePeligro: 2 },
            {id: 9, name: "Fibras", idClasePeligro: 2 },
            {id: 10, name: "Liquidos", idClasePeligro: 2 },
            {id: 11, name: "Gases y vapores", idClasePeligro: 2 },
            {id: 12, name: "Humos metálicos, no metálicos", idClasePeligro: 2 },
            {id: 13, name: "Material particulado", idClasePeligro: 2 },
            {id: 14, name: "Virus", idClasePeligro: 3 },
            {id: 15, name: "Bacterias", idClasePeligro: 3 },
            {id: 16, name: "Hongos", idClasePeligro: 3 },
            {id: 17, name: "Ricketsias", idClasePeligro: 3 },
            {id: 18, name: "Ricketsias", idClasePeligro: 3 },
            {id: 19, name: "Parasitos", idClasePeligro: 3 },
            {id: 20, name: "Picaduras", idClasePeligro: 3 },
            {id: 21, name: "Mordeduras", idClasePeligro: 3 },
            {id: 22, name: "Fluidos o escrementos", idClasePeligro: 3 },
            {id: 23, name: "Postura", idClasePeligro: 4 },
            {id: 24, name: "Esfuerzo", idClasePeligro: 4 },
            {id: 25, name: "Movimiento repetitivo", idClasePeligro: 4 },
            {id: 26, name: "Manipulación manual de cargas", idClasePeligro: 4 },
            {id: 27, name: "Gestión organizacional", idClasePeligro: 7 },
            {id: 28, name: "Caracteristicas de la organización del trabajo", idClasePeligro: 7 },
            {id: 29, name: "Caracteristicas del grupo social del trabajo", idClasePeligro: 7 },
            {id: 30, name: "Condiciones de la tarea", idClasePeligro: 7 },
            {id: 31, name: "Interfase persona – tarea", idClasePeligro: 7 },
            {id: 32, name: "Jornada de trabajo", idClasePeligro: 7 },
            {id: 33, name: "Mecánico", idClasePeligro: 8 },
            {id: 34, name: "Eléctrico", idClasePeligro: 8 },
            {id: 35, name: "Locativo", idClasePeligro: 8 },
            {id: 36, name: "Tecnológico", idClasePeligro: 8 },
            {id: 37, name: "Accidentes de tránsito", idClasePeligro: 8 },
            {id: 38, name: "Publicos", idClasePeligro: 8 },
            {id: 39, name: "", idClasePeligro: 8 },
            {id: 40, name: "Trabajo en alturas", idClasePeligro: 8 },
            {id: 41, name: "Espacios confinados", idClasePeligro: 8 },
            {id: 42, name: "Sismo", idClasePeligro: 9 },
            {id: 43, name: "Terremoto", idClasePeligro: 9 },
            {id: 44, name: "Vendaval", idClasePeligro: 9 },
            {id: 45, name: "Inundaciones", idClasePeligro: 9 },
            {id: 46, name: "Derrumbes", idClasePeligro: 9 },
            {id: 47, name: "Precipitaciones", idClasePeligro: 9 }
        ]

            //creando los options de area
        var clasesSelect = document.getElementById('clasesPeligro');
        var categoriasSelect = document.getElementById('categorias');

        clasesSelect.addEventListener("change", cargarCategorias);

        clasesPeligro.forEach(function(area){
                let opcion = document.createElement('option')
          opcion.value = area.id
          opcion.text = area.name
          areasSelect.add(opcion)
        })

        function cargarCategorias(){
                categoriasSelect.options.length = 1;
          subCategoriasSelect.options.length = 1;
          categorias
          .filter(function (categoria){
              return categoria.idArea == this;
          }, areasSelect.value)
          .forEach(function(categoria){
                let opcion = document.createElement('option')
            opcion.value = categoria.id
            opcion.text = categoria.name
            categoriasSelect.add(opcion);
          });
        }

    }

</script>

