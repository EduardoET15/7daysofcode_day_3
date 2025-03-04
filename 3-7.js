const nombre = prompt("Cual es tu nombre??")
//const eleccion = prompt("Que prefieres estudiar FRONT-END (Presiona 1) o BACK-END (presiona 2)?")
const front = prompt("Deseas estudiar en el área de FRONT END?")
const end = prompt("Deseas estudiar en el área de BACK END?")

if (front == 'si') {
    prompt("Que prefieres estudiar REACT o VUE?");
} else if (end == 'si') {
    prompt("Prefieres estudiar C# o JAVA?");
} else {
    alert("Es necesario elegir alguna opción");
}

const eleccion = prompt("Deseas seguir especializandote en alguna área especifica?");
if (eleccion == "si") {
    alert("Muy bien, sigue preparandote!!!!");
} else {
    alert("Hay otro camino a seguir");
}

const full = prompt("Deseas ser desarrollador FULLSTACK?");
if (full == "si") {
    alert("Buena elección!! Es imponrtante estudiar bastante para lograrlo!!");
} else {
    alert("Existen otros caminos para desarrollarte en el ámbito tecnológico");
}

let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
while (mensaje === "ok") {
    let nuevaTecnología = prompt("¿Cuál?");
    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
}