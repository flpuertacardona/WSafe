// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

<script>

    function insLocativa() {

        var peligrosFisicos = [
            {Titulo: "1.1 Existe buena iluminación artificial y natural.", Cumple: Item1, Observa: Obs1},
            {Titulo: "1.2 Las luminarias están en buen estado.", Cumple: Item2, Observa: Obs2},
            {Titulo: "1.3 Hay buena ventilación en el área", Cumple: Item3, Observa: Obs3},
            {Titulo: "1.4 El nivel de ruido es adecuado (Condiciones Normales inferiores a 85 db)", Cumple: Item4, Observa: Obs4},
            {Titulo:  "1.5 Existen controles de ruido (control en la fuente, en el medio de propagación, en el
                    trabajador).",Cumple: Item5, Observa: Obs5},
            {Titulo: "1.6 La temperatura es confortable.", Cumple: Item6, Observa: Obs6}]


        var peligrosLocativos = [
            {Titulo: "2.1 Los muros están en buen estado (Sin grietas, sin humedad, pintura buen estado)", Cumple = Item7, Observa = Obs7},
            {Titulo: "2.2 Escaleras en buen estado (paso manos, antideslizantes).", Cumple = Item8, Observa = Obs8},
            {Titulo: "2.3 Pisos en buen estado.",Cumple = Item9, Observa = Obs9},
            {Titulo: "2.4 Ventanas, puertas en buen estado (manijas, chapas).", Cumple: Item10, Observa: Obs10},
            {Titulo: "2.5 Techos en buen estado (Sin goteras).", Cumple: Item11, Observa: Obs11},
            {Titulo: "2.6 Areas de circulación despejadas (escaleras, zonas de transito en almacen, etc)", Cumple: Item12, Observa: Obs12},
            {Titulo: "2.7 Están claramente demarcadas las áreas de trabajo y rutas de tránsito.", Cumple: Item13, Observa: Obs13},
            {Titulo: "2.8 En general se observan las sillas en buen estado?",Cumple: Item14, Observa: Obs14},
            {Titulo: "2.9 Las divisiones modulares, escritorio y cajones se encuentran en buenas condiciones.", Cumple: Item15, Observa: Obs15}]

        var peligrosElectricos = [
            {Titulo: "3.1 Cables eléctricos debidamente entubados. ", Cumple: Item16, Observa: Obs16},
            {Titulo: "3.2 Los empalmes o conexiones estan en buen estado", Cumple: Item17, Observa: Obs17},
            {Titulo: "3.3 Tomas e interruptores en buen estado",Cumple: Item18, Observa: Obs18},
            {Titulo: "3.4 Se observa cajas o toma corriente sin sobrecarga.", Cumple: Item19, Observa: Obs19},
            {Titulo: "3.5 Cables en buen estado", Cumple: Item20, Observa: Obs20},
            {Titulo: "3.6 Los tableros, cajas y circuitos estan identificados", Cumple: Item21, Observa: Obs21},
            {Titulo: "3.7 Los tableros y cajas estan libres de obstáculos.", Cumple: Item22, Observa: Obs22},
            {Titulo: "3.8 Existe señalización de peligros.", Cumple: Item23, Observa: Obs23}]

        var peligrosSeguridad = [
            {Titulo: "4.1 Los extintores son los adecuados al tipo de peligros del área.", Cumple: Item24, Observa: Obs24},
            {Titulo: "4.2 Extintores de carga vigente.", Cumple: Item25, Observa: Obs25},
            {Titulo: "4.3 Extintores libre de obstaculos", Cumple: Item26, Observa: Obs26},
            {Titulo: "4.4 Existe señalización de extintores", Cumple: Item27, Observa: Obs27},
            {Titulo: "4.5 Existe señalización en todas las instalaciones y en las salidas de emergencia.", Cumple: Item28, Observa: Obs28},
            {Titulo: "4.6 Las áreas de salida de emergencia y punto de encuentro se encuentran despejadas", Cumple: Item29, Observa: Obs29},
            {Titulo: "4.7 El personal cuenta con los elementos de protección personal (EPP).", Cumple: Item30, Observa: Obs30},
            {Titulo: "4.8 Hay camilla en el área. (Solo si es necesaria)", Cumple: Item31, Observa: Obs31},
            {Titulo: "4.9 Hay botiquín y control de consumo.", Cumple: Item32, Observa: Obs32},
            {Titulo: "4.10 Se tiene la lista de teléfonos de emergencia a la mano?.", Cumple: Item33, Observa: Obs33},
            {Titulo: "4.11 Se tiene la lista de centros de salud u hospitales de referencia cercanos?", Cumple: Item34, Observa: Obs34}]

        var peligrosBiologicos = [
            {Titulo: "5.1 El area esta libre de insectos y roedores.", Cumple: Item35, Observa: Obs35}]

        var peligrosBiomecanico = [
            {Titulo: "6.1 Espacio de trabajo adecuado (para miembros inferiores, desplazamientos y salidas del puesto de trabajo)
                ",Cumple: Item36, Observa: Obs36},
            {Titulo: "6.2 Altura adecuada de la pantalla del computador respecto a la horizontal (el borde superior
                de la pantalla se encuentra a la misma altura de los ojos del trabajador)
                ",Cumple: Item37, Observa: Obs37},
            {Titulo: "6.3 Silla en buenas condiciones, espaldar, asiento, patas o base",Cumple: Item38, Observa: Obs38},
            {Titulo: "6.4 El peso de los objetos que levanta o almacena están dentro de los límites permisibles", Cumple: Item39, Observa: Obs39}]

        varOrdenAseo = [
            {Titulo: "7.1 El área se encuentra organizada.", Cumple: Item40, Observa: Obs40},
            {Titulo: "7.2 Se realiza la clasificación de residuos sólidos en forma correcta.", Cumple: Item41, Observa: Obs41},
            {Titulo: "7.3 Los residuos peligrosos se separan y disponen con empresas autorizadas", Cumple: Item42, Observa: Obs42},
            {Titulo: "7.4 El sitio inspeccionado se encuentra en buen estado de aseo y mantenimiento", Cumple: Item43, Observa: Obs43}]

        var saneamiento = [
            {Titulo: "8.1 Servicios higiénicos en buen estado y limpieza.", Cumple: Item44, Observa: Obs44},
            {Titulo: "8.2 Luminarias de baños en buen estado", Cumple: Item45, Observa: Obs45},
            {Titulo: "8.3 Hay papel higiénico, jabón, toallas y papeleras con pedal y tapa.", Cumple: Item46, Observa: Obs46},
            {Titulo: "8.4 Estan los inodoros limpios en buen estado.", Cumple: Item47, Observa: Obs47},
            {Titulo: "8.5 Se tienen reguladores o ahorradores de agua en los lavamanos y sanitarios", Cumple: Item48, Observa: Obs48}]

        var peligrosMecanico = [
             {Titulo: "9.1 Equipos y herramientas de oficina en buen estado", Cumple: Item49, Observa: Obs49},
             {Titulo: "9.2 Archivo rodante en buen estado",Cumple: Item50, Observa: Obs50}]

        var observacionTareas = [
            {Titulo: "10.1 Los funcionarios cumplen con las normas de seguridad de su actividad.", Cumple: Item51, Observa: Obs51},
            {Titulo: "10.2 Los funcionarios conocen los peligros a los que están expuestos.",Cumple: Item52, Observa: Obs52},
            {Titulo: "10.3 El personal tiene claro que hacer en caso de un incidente , Accidentes de trabajo y Enfermedad Laboral.",Cumple: Item53, Observa: Obs53},
            {Titulo: "10.4 Los funcionarios conocen la Politica de Seguridad y Salud en el Trabajo.", Cumple: Item54, Observa: Obs54},
            {Titulo: "10.5 Los funcionarios saben como usar y cuidar sus EPP.", Cumple: Item55, Observa: Obs55}]

        var medioAmbiente = [
            {Titulo: "11.1 Agua y Energía", Cumple: "", Observa: ""},
            {Titulo: "- Horno microondas. (Si aplica)", Cumple: Item1, Observa: Obs1},
            {Titulo: "- Nevera. (Si aplica)", Cumple: Item2, Observa: Obs2},
            {Titulo: "- Cafetera. (Si aplica)", Cumple: Item3, Observa: Obs3},
            {Titulo: "- Aire Acondicionado. (Si aplica)", Cumple: Item4, Observa: Obs4},
            {Titulo: "- Impresora / fotocopiadora. (Si aplica)", Cumple: Item5, Observa: Obs5},
            {Titulo: "- Computador. (Si aplica)",Cumple: Item6, Observa: Obs6},
            {Titulo: "- Otro", Cumple: Item7, Observa: Obs7},
            {Titulo: "11.2 Sustanacias Quimicas", Cumple: "", Observa: ""},
            {Titulo: "- El area cuenta con las tarjetas de emergencia", Cumple: Item8, Observa: Obs8},
            {Titulo: "- El area cuenta con las Hojas de seguridad", Cumple: Item9, Observa: Obs9},
            {Titulo: "- Otro", Cumple: Item10, Observa: Obs10}]

    }

    function insHerramientas() {
        var herramientasManuales = [
            {Titulo: "<b>A HERRAMIENTAS MANUALES</b>", Estado: ""},
            {Titulo: "1 Se usa la adecuada al trabajo", Estado: "Item1"},
            {Titulo: "2 Se encuentran en buen estado", Estado: "Item2"},
            {Titulo: "3 Se guardan y portan adecuadamente", Estado: "Item3"},
            {Titulo: "4 Los mangos de madera no presentan astillas, ni fisuras y están firmemente adheridos. ", Estado: "Item4"}]

        var herramientasCorte = [
             {Titulo: "<b>B HERRAMIENTAS DE CORTE</b>", Estado: ""},
             {Titulo: "1 Los cinceles no presentan su cabeza tipo hongo", Estado: Item5},
             {Titulo: "2 Los cinceles se encuentran afilados", Estado: Item6},
             {Titulo: "3 Las seguetas están correctamente instaladas y no presentan defectos", Estado: Item7},
             {Titulo: "4 Las limas disponen de sus mangos y no están rotas o sucias", Estado: Item8},
             {Titulo: "5 Los serruchos disponen de empuñadura y sus dientes están completos", Estado: Item9},
             {Titulo: "6 Los cuchillos disponen de mangos y fundas", Estado: Item10}]

        var herramientasGolpe = [
             {Titulo: "<b>C HERRAMIENTAS DE GOLPE</b>", Estado: ""},
             {Titulo: "1 Se emplea el martillo adecuado según la labor ", Estado: Item11},
             {Titulo: "2 Sus caras y bordes están en buen estado", Estado: Item12},
             {Titulo: "3 Su mango no está quebrado, astillado ni flojo", Estado: Item13}
            ]

        var herramientasTorsion = [
            {Titulo: "<b>D HERRAMIENTAS DE TORSION - LLAVES</b>", Estado: ""},
            {Titulo: "1 Cuentan con llaves de pulgadas y milimétricas", Estado: Item14},
            {Titulo: "2 Se observan en la llave huellas y palancas", Estado: Item15},
            {Titulo: "3 Se dispone de llaves para golpear", Estado: Item16},
            {Titulo: "4 Las llaves no presentan sus mordazas abiertas o deterioradas", Estado: Item17},
            {Titulo: "5 La herramienta para electricista cuenta con el aislamiento adecuado y son probadas frecuentemente", Estado: Item18},
            {Titulo: "6 La punta y cabo de los destornilladores se encuentran en buen estado", Estado: Item19},
            {Titulo: "7 Se dispone de herramientas que no produzcan chispas.", Estado: Item20}]

        var herramientasElecrtricas = [
             {Titulo: "<b>E HERRAMIENTAS ELCTRICAS</b>", Estado :""},
             {Titulo: "1  Las herramientas según Las adecuadas según el riesgo (humedad, vapores)", Estado: Item21},
             {Titulo: "2 Se emplean los elementos de protección personal de acuerdo con la herramienta empleada", Estado: Item22},
             {Titulo: "3 Están limpia y lubricadas", Estado: Item23},
             {Titulo: "4 Tienen sus guardas", Estado: Item24},
             {Titulo: "5 Posee aislamiento doble o conexión a tierra por enchufe de tres patas", Estado: Item25},
             {Titulo: "6 El cable y enchufe no presentan daños", Estado: Item26},
             {Titulo: "7 En los taladros se observa el mandil con golpes", Estado: Item2"},
             {Titulo: "8 Brocas sin filo o se ha reducido su diámetro para taladros pequeños", Estado: Item28},
             {Titulo: "9 Los esmeriles cuentan con guardas y los soportes de los discos o piedras son los adecuados", Estado: Item29},
             {Titulo: "10 Se observa deterioro en las roscas o tornillo en las ruedas abrasivas.", Estado: Item30},
             {Titulo: "11 Se almacenan las pulidoras y discos en sitios donde puedan ser golpeados", Estado: "Item31"}]

        var herramientasNauticas = [
            {Titulo: "<b>F HERRAMIENTAS NEUMATICAS</b>", Estado: ""},
            {Titulo: "1 Las mangueras y acoples se encuentran en buen estado", Estado: Item32},
            {Titulo: "2 Se emplean elementos de protección personal de acuerdo con la herramienta", Estado: Item33},
            {Titulo: "3 Se trabaja a las presiones indicadas", Estado: Item34},
            {Titulo: "4 La herramienta es descargada al terminar", Estado: Item35}]

    }

    function insBPA() {

    }
    function selecPeligro() {
        var subjectObject = {
            "Fisicos": ["Ruido", "Iluminacion", "Vibración", "Temperaturas Extremas", "Presión atmosferica", "Radiaciones Ionizantes", "Radiaciones No Ionozantes"],
            "Quimicos": ["Polvos orgánicos, inorgánicos", "Fibras", "Liquidos", "Gases y vapores", "Humos metálicos, no metálicos", "Material particulado"],
            "Biologicos": ["Virus", "Bacterias", "Hongos", "Ricketsias", "Parasitos", "Picaduras", "Mordeduras", "Fluidos o escrementos"],
            "Ergonomicos": ["Postura", "Esfuerzo", "Movimiento repetitivo", "Manipulación manual de cargas"],
            "Psicosocial": ["Gestión organizacional", "Caracteristicas de la organización del trabajo", "Caracteristicas del grupo social del trabajo", "Condiciones de la tarea", "Interfase persona – tarea", "Jornada de	trabajo"],
            "Condiciones seguridad": ["Mecánico", "Eléctrico", "Locativo", "Tecnológico", "Accidentes de tránsito",	"Públicos", "Trabajo en alturas", "Espacios confinados"],
            "Desatres Naturales": ["Sismo", "Terremoto", "Vendaval", "Inundación", "Derrumbe", "Precipitaciones"]
        }

        window.onload = function() {
          var subjectSel = document.getElementById("subject");
          var topicSel = document.getElementById("topic");
          for (var x in subjectObject) {
                subjectSel.options[subjectSel.options.length] = new Option(x, x);
          }

        subjectSel.onchange = function() {
                //empty Chapters dropdown
                topicSel.length = 1;
            //display correct values
            var z = subjectObject[this.value];
            for (var i = 0; i < z.length; {
                topicSel.options[topicSel.options.length] = new Option(z[i], z[i]);
            }
        }
    }

    function myFunction() {
      var x = document.forms["frm1"];
      var text = "";
      var i;
      for (i = 0; i < x.length ; {
            text += x.elements[i].value + "<br>";
        }
         document.getElementById("demo").innerHTML = text;
    }


    function categoriaCumple(){
        var cumplimiento = [
            {id: 1, name: "Cumple"},
            {id: 2, name: "No cumple"},
            {id: 3, name: "NA"}
        ]

    }


    function nivelesDeficiencia() {
        var niveles = [
            {id: 1, name: "Muy alto (MA)"},
            {id: 2, name: "Alto (A)"},
            {id: 3, name: "Medio (M)"},
            {id: 4, name: "Bajo (B)"}
        ]
    }

    function nivelesExposicion() {
        var niveles = [
            {id: 1, name: "Continua (EC)"},
            {id: 2, name: "Frecuente (EF)"},
            {id: 3, name: "Ocasional (EO)"},
            {id: 4, name: "Esporadica (EE)"}
        ]
    }

    function nivelesProbabilidad(p) {
        if(p >= 24 && p <= 40) => return "Muy alto (MA)";
        if(p >= 10 && p <= 20) => return "Alto (A)";
        if(p >= 6  && p <= 8)  => return "Medio (M)", "Entre 8 y 6";
        if(p >= 2  && p <= 4)  => return "Bajo (B)";
    } 


    function nivelesConsecuencia() {
        var niveles = [
            {id: 1, name: "Mortal catastrófico""},
            {id: 2, name: "Muy grave"},
            {id: 3, name: "Grave"},
            {id: 4, name: "Leve"}
        ]
    }

    function nivelesRiesgo(r) {
        if(r >= 600 && r <= 4000) => return "I";
        if(r >= 150 && p <= 500)  => return "II";
        if(p >= 40  && p <= 120)  => return "III";
        if(p <= 20) => return "IV";
    }

    function aceptabilidadRiesgo(r) {
        if(r >= 600 && r <= 4000) => return "No Aceptable";
        if(r >= 150 && p <= 500)  => return "No Aceptable o Aceptable con control Específico";
        if(p >= 40  && p <= 120)  => return "Mejorable";
        if(p <= 20) => return "Aceptable";
    }

    function condicionesInseguras(){
        var condicionInsegura = [
            {id: 1, name: "Orden y limpieza"},
            {id: 2, name: "Superficies defectuosas"},
            {id: 3, name: "Herramientas"},
            {id: 4, name: "Derrames"},
            {id: 5, name: "Instalaciones electricas"},
            {id: 6, name: "Instalaciones locativas"},
            {id: 7, name: "Vehiculos"},
            {id: 8, name: "Equipos"},
            {id: 9, name: "Sustancias quimicas"},
            {id: 10, name: "Otros"}
        ]

    }

    function actosInseguros(){
        var actoInseguro = [
            {id: 1, name: "Distracción"},
            {id: 2, name: "Prisa"},
            {id: 3, name: "Cansancio"},
            {id: 4, name: "Uso EPP"},
            {id: 5, name: "Exceso confianza"},
            {id: 6, name: "Indiferencia"},
            {id: 7, name: "Comportamiento ambiente"}
        ]

    }

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
            {id: 4, name: "Lugar" }
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

