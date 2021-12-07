// innerhtml -> escribir en html
// appendchild -> crear una etiqueta
function operar() {
    let num1 = parseInt(document.querySelector("#numero1").value);
    let num2 = parseInt(document.querySelector("#numero2").value);
    let operacion = document.querySelector("#operacion").value

    if (operacion == "+") {
        respuesta(num1 + num2)
    } else if (operacion == "-") {
        respuesta(num1 - num2)
    } else if (operacion == "*") {
        respuesta(num1 * num2)
    } else {
        respuesta (num1 / num2)
    }
}

let respuesta = function (resultado) {
    let espacioRespuesta = document.querySelector("#resultado")
    espacioRespuesta.innerText  =`La respuesta es:  ${resultado}`
}
