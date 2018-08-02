"use strict"

/**
 * Cadena con los valores de las celdas que dio click
 */
var usuarioclick = "12345";

/**
 * Para validar si un numero esta en la cadema usuariockik
 * @param {*} numero 
 */
function validar(numero){
    // indexOf devuelve la posision de la cadema buscada
    var index = usuarioclick.indexOf(numero);
    if (index = -1){
        console.log("no tiene ese valor: " + numero);
        return false;
    } else {
        console.log("Si tiene el valor: " + numero);
        return true;
    }
}