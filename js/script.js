/*ejercicio 11 original -Se trata de poner siete case, uno para cada día de la semana.Finalmente, un bloque default para contemplar cualquier cosa no contempladaen los case.

Modificarlo para que informe un plan de ejercicios por día.*/

function dias() {
    //hace visible la imagen del ejercicio correspondiente
    var path_image = "./img/ej1.jpg";
    document.getElementById("ej1").src = path_image;
    document.getElementById("ej1").style.visibility = "visible";
    console.clear();
    do {
        var diaSemana = prompt("¿Qué día es hoy?");
        if (diaSemana == null) {
            alert('Salió del ejercicio.')
            console.log("Salió.");
        } else {
            switch (diaSemana) {
                case "lunes":
                    alert("Hoy es lunes. Trote durante 30 min.");
                    break;
                case "martes":
                    alert("Hoy es martes. Nade durante 1 hora.");
                    break;
                case "miércoles":
                    alert("Hoy es miércoles. Haga 200 abdominales.");
                    break;
                case "jueves":
                    alert("Hoy es jueves. Juegue al tenis durante 2 hs.");
                    break;
                case "viernes":
                    alert("Hoy es viernes. Haga 4 series de 80 saltos en rana");
                    break;
                case "sábado":
                    alert("Hoy es sábado. Juegue 1 hora al voley.");
                    break;
                case "domingo":
                    alert("Hoy es domingo. Camine durante 2 hs.");
                    break;
                default:
                    alert("Escribe el día de la semana en minúsculas (lunes/martes/miércoles/jueves/sábado/domingo).");
                    diaSemana = "error";
                    console.log(diaSemana);
            }
        }
    } while (diaSemana == "error");
}

//bucle modificado para que se ejecute de 20 a 70
function bucle() {
    //hace visible la imagen del ejercicio correspondiente
    var path_image = "./img/ej2.jpg";
    document.getElementById("ej1").src = path_image;
    document.getElementById("ej1").style.visibility = "visible";
    console.clear();
    //ejecuta el bucle
    for (i = 20; i <= 70; i++) {
        document.write("El número es: " + i + "<br>");
    }
    //muestra boton para salir y volver a mostrar la pagina inicial
    document.write("<input type='button' value='Salir del ejercicio' onclick='window.history.go(0);'>")
}

//bucle para que muestre HOLA MUNDO la cantidad de veces que el usuario quiera
function hola_mundo() {
    console.clear();
    do {
        //hace visible la imagen del ejercicio correspondiente
        var path_image = "./img/ej3.jpg";
        document.getElementById("ej1").src = path_image;
        document.getElementById("ej1").style.visibility = "visible";
        //pide ingrese las veces que aparecera HOLA MUNDO en pantalla
        var veces = prompt("¿Cuantas veces quiere que aparezca HOLA MUNDO en pantalla?");
        //pregunta si cancela
        if (veces == null) {
            alert('Salió del ejercicio.')
            console.log("Salió.");
        }
        //pregunta si ingreso un numero mayor a 0
        else if (Number.isInteger(+veces) === true && veces > 0) {
            //muestra HOLA MUNDO mientras i sea menor a la var veces
            for (i = 0; i < veces; i++) {
                document.write("HOLA MUNDO <br>");
            }
            document.write("Se mostró " + i + " veces.<br>");
            //muestra boton para salir y volver a mostrar la pagina inicial
            document.write("<input type='button' value='Salir del ejercicio' onclick='window.history.go(0);'>")
        }
        //muestra mensaje de valor inválido
        else {
            alert(veces + " no es un valor válido. Ingresa un número entero mayor a 0.");
            veces = 0;
        }
        //pide la cantidad de veces mientras el valor no es valido
    } while (veces == 0);
}

//limpia la pagina a su estado inicial escondiendo la imagen del ejercicio elegido
function limpiar() {
    document.getElementById("ej1").style.visibility = "hidden";
    console.clear();
}