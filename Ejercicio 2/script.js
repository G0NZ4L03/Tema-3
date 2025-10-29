/*
Enunciado.
2. Vamos utilizar nuestros conocimientos de manipulación de cadenas en javascript, para crear un algoritmo de compresión de cadenas. 
El algoritmo consiste en sustituir rachas de caracteres repetidos por el número de repeticiones seguido del carácter. 
El algoritmo sólo actúa con cadenas de caracteres del alfabeto, por lo que arrojará un mensaje de error en caso 
de que la cadena contenga números. Si admite espacios, en cuyo caso se sustituirá el espacio por una interrogación "?".

Ejemplos:
Cadena de entrada: "holaaaa mundo" se transforma en "hol4a? mundo"
Cadena de entrada: "aaabbcaaaa" se transforma en "3a2bc4a"

 a). Crea una función de compresión que recibe la cadena y devuelve la cadena comprimida.
 b). Crea una función de descompresión que recibe una cadena en formato comprimido y devuelve la cadena original.

 Implementa una interfaz con dos botones que permita codificar y decodificar cadenas introducidas por el usuario.
*/

let botonCom = document.getElementById("botonCom").addEventListener("click", comprimir);
let botonDescom = document.getElementById("botonDescom").addEventListener("click", descomprimir);

let solucion = document.getElementById("solucion");

function comprimir() {
    //Cojo el valor de la cadena al momento de pulsar el boton
    let cadena = document.getElementById("cadena").value; 
    //Declaro el booleano para comprobar si hay numeros
    let hayNumero = false;

    //Recorro toda la cadena del input
    for (let i = 0; i < cadena.length; i++) {
        //Voy comprobando si el caracter actual es un numero para activar el booleano
        if (cadena[i] >= '0' && cadena[i] <= '9') {
            hayNumero = true;
        } 
    }

            if (hayNumero) {    //Si hay algun numero mando el error
                solucion.innerHTML = "Error: La cadena no debe contener números.";
            }else {
            let resultado = "";  
            for (let i = 0; i < cadena.length; i++) {
                let contador = 1;
                let caracterActual = cadena[i];
                while (caracterActual === cadena[i + 1]) {
                    contador++;
                    i++;
                }
                //ARREGLAR QUE NO PONGA EL 1 ANTES DE CARACTERES UNICOS
                resultado = resultado + contador + caracterActual;
            }
            solucion.innerHTML = "El texto comprimido es: " + resultado;
        }   

}


function descomprimir() {
    solucion.innerHTML = "El texto descomprimido es: " + document.getElementById("cadena").value;
}   
