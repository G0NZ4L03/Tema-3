/*3. Crea una pequeña interfaz con un botón que cada vez que el usuario hace click haya un contador en 
pantalla con el número de clicks acumulado. 

a) Utiliza la propiedad de window localStorage para almacenar el número de clicks realizados y que 
cuando vuelva a entrar otra vez en la web posteriormente continúe desde el número en que se quedó.

b) Si utilizamos una variable de tipo number para manipular el contador, llegará un momento en el que alcancemos el 
mayor entero con el que javascript es capaz de realizar operaciones de forma segura, alcanzado este número ya no aumentará 
el contador y aparecerá un mensaje de alerta "Ya no se pueden realizar nmás clicks".
*/

let numero = document.getElementById("salida");

document.getElementById("boton").addEventListener("click", sumar);
//lo primero que hago es comprobar si ya existe un valor previo en localStorage, sino existe lo inicializo a 0
if (!localStorage.contador) {
    localStorage.contador = 0; //Inicializar a 9007199254740989 y probar con 3 clicks
} 
//muestro el numero en el html, sea cual sea el valor
    numero.innerHTML = localStorage.contador;

function sumar() {
//compruebo si el numero es el maximo permitido
    if (localStorage.contador >= Number.MAX_SAFE_INTEGER) {
        alert("Ya no se pueden realizar más clicks");
    } else { //si no lo es,fuerzo a que contador sea un numero y no una cadena y sumarle 1 en cada click
        localStorage.contador = parseInt(localStorage.contador) + 1;
        numero.innerHTML = localStorage.contador;
    }
}
