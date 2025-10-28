/*
Enunciado.
1.  Crea una página con un botón que al hacer click abre una ventana de tamaño 600 X 400, en la ventana se escribirá la frase 
"Hoy es dia/mes/año y faltan XX días para fin de año", siendo día, mes, y año , los actuales obtenidos a partir del objeto Date.
*/

//Capturo el evento del click en el boton para que ejecute mi funcion
let boton = document.getElementById("boton").addEventListener("click", abrirVentana);

function abrirVentana() {

    //Lo primero que hago en la funcion es abrir la ventana
    let ventana = window.open("", "", "width=600,height=400");

    //Ahora obtengo los datos de la fecha actual y de año nuevo
    let fecha = new Date();
    let fechaFinAno = new Date(2026, 0, 1);
    let diasRestantes = fechaFinAno.getTime() - fecha.getTime(); //Calculo la diferencia en milisegundos
    diasRestantes = Math.ceil(diasRestantes / 1000 / 60 / 60 / 24); //Convierto la diferencia en dias

    //Formulo y escribo la frase en la ventana
    let frase = "Hoy es " +fecha.getDate()  + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() + " y faltan " + diasRestantes + " días para fin de año.";
    ventana.document.write(frase);
}