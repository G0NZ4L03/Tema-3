/*
4. Utiliza el método setTimeout para realizar una redirección de la página 
a otra que tu elijas, pasados 3 segundos desde la carga de la página
*/

let contador = 3;
document.getElementById("numero").innerHTML = contador;

    setInterval( cuentaAtras, 1000 );
    
function cuentaAtras() {
    contador--;
    document.getElementById("numero").innerHTML = contador;
}

setTimeout( cambioPagina, 3000 );

function cambioPagina() {
window.location.href = "/Ejercicio%202/index.html";
}