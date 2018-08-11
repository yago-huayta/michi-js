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

var numeroDeClicks = 0;

var columna1Seleccionada = false;
var columna2Seleccionada = false;
var columna3Seleccionada = false;
var columna4Seleccionada = false;
var columna5Seleccionada = false;
var columna6Seleccionada = false;
var columna7Seleccionada = false;
var columna8Seleccionada = false;
var columna9Seleccionada = false;

function cambiarimg(nombreColumna){
    var columna = document.getElementById(nombreColumna);
    if(hayGanador == false){
        numeroDeClicks = numeroDeClicks + 1;
        if(numeroDeClicks % 2 != 0){
            clickCap = clickCap + nombreColumna;
            columna.innerHTML="<img src='resources/icono1.jpg' title='imagen del cap'/>";
        }else{
            columna.innerHTML="<img src='resources/icono2.jpg' title='imagen de iron man'/>";
            clickIron = clickIron + nombreColumna;
            
        }
    }
    console.log("Click Cap: "+ clickCap);
    console.log("ClickIron: "+ clickIron);
    console.log(numeroDeClicks);
}

function columna1(){
    console.log("soy 1");

    if(columna1Seleccionada == false){
        columna1Seleccionada = true;
        cambiarimg("columna1");
        validarGanador(clickCap, "Congrats, the capitan America is the winner");
        validarGanador(clickIron, "Congrats, the iron man is the winner");

    }
}

function columna2(){
    console.log("soy 2");
    if(columna2Seleccionada == false){
        columna2Seleccionada = true;
        cambiarimg("columna2");
        validarGanador(clickCap, "Congrats, the capitan America is the winner");
        validarGanador(clickIron, "Congrats, the iron man is the winner");

    }
}
function columna3(){
    console.log("soy 3");
    if(columna3Seleccionada == false){
        columna3Seleccionada = true;
        cambiarimg("columna3");
        validarGanador(clickCap, "Congrats, the capitan America is the winner");
        validarGanador(clickIron, "Congrats, the iron man is the winner");

    }
}
function columna4(){
    console.log("soy 4");
    if(columna4Seleccionada == false){
        columna4Seleccionada = true;
        cambiarimg("columna4");
        validarGanador(clickCap, "Congrats, the capitan America is the winner");
        validarGanador(clickIron, "Congrats, the iron man is the winner");

    }
}
function columna5(){
    console.log("soy 5");
    if(columna5Seleccionada == false){
        columna5Seleccionada = true;
        cambiarimg("columna5");
        validarGanador(clickCap, "Congrats, the capitan America is the winner");
        validarGanador(clickIron, "Congrats, the iron man is the winner");

    }
}
function columna6(){
    console.log("soy 6");
    if(columna6Seleccionada == false){
        columna6Seleccionada = true;
        cambiarimg("columna6");
        validarGanador(clickCap, "Congrats, the capitan America is the winner");
        validarGanador(clickIron, "Congrats, the iron man is the winner");

    }
}

function columna7(){
    console.log("soy 7");
    if(columna7Seleccionada == false){
        columna7Seleccionada = true;
        cambiarimg("columna7");
        validarGanador(clickCap, "Congrats, the capitan America is the winner");
        validarGanador(clickIron, "Congrats, the iron man is the winner");

    }
}
function columna8(){
    console.log("soy 8");
    if(columna8Seleccionada == false){
        columna8Seleccionada = true;
        cambiarimg("columna8");
        validarGanador(clickCap, "Congrats, the capitan America is the winner");
        validarGanador(clickIron, "Congrats, the iron man is the winner");

    }
}
function columna9(){
    console.log("soy 9")
    if(columna9Seleccionada == false){
        columna9Seleccionada = true;
        cambiarimg("columna9");
        validarGanador(clickCap, "Congrats, the capitan America is the winner");
        validarGanador(clickIron, "Congrats, the iron man is the winner");

    }
}


var clickCap = "";
var clickIron = "";
var hayGanador = false;

function validarGanador(jugador, mensaje){
    if(jugador.includes("columna1") & jugador.includes("columna2") & jugador.includes("columna3")){
        hayGanador=true;
        alert(mensaje);
    }
    if(jugador.includes("columna4") & jugador.includes("columna5") & jugador.includes("columna6")){
        hayGanador=true;
        alert(mensaje);   
     }
    if(jugador.includes("columna7") & jugador.includes("columna8") & jugador.includes("columna9")){
        hayGanador=true;
        alert(mensaje);   
     }
    if(jugador.includes("columna1") & jugador.includes("columna4") & jugador.includes("columna7")){
        hayGanador=true;
        alert(mensaje);   
    }
    if(jugador.includes("columna2") & jugador.includes("columna5") & jugador.includes("columna8")){
        hayGanador=true;
        alert(mensaje);   
     }
    if(jugador.includes("columna3") & jugador.includes("columna6") & jugador.includes("columna9")){
        hayGanador=true;
        alert(mensaje);  
      }
    if(jugador.includes("columna1") & jugador.includes("columna5") & jugador.includes("columna9")){
        hayGanador=true;
        alert(mensaje);  
      }
    if(jugador.includes("columna3") & jugador.includes("columna5") & jugador.includes("columna7")){
        hayGanador=true;
        alert(mensaje);   
     }

     if(numeroDeClicks == 9){
         alert("Es un empate");
     }
}
