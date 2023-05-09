//import { lenguajeactual,lenguajedeseado } from "./listas.js";
// variable
var lenguaje_actual=lenguajeactual
var lenguaje_deseado= lenguajedeseado



//seleccionran item random
var visto= []
const palabra_random=()=>{
    let numero= Math.floor(Math.random()*1000)
    visto.push(numero)
    let limite= 20
    while (visto.includes(numero) && limite >0) {
        numero =Math.floor(Math.random()*1000)
        limite--
        //console.log(limite)
    }
    return numero
}


//cargar itam al dom
var numero_1a5=1;
function cargar_item_al_dom() {
    for (let i = 1; i < 6; i++) {
        let indice_palabra= palabra_random();
        document.getElementById(`esp${i}`).innerHTML= lenguaje_actual[indice_palabra]
        document.getElementById(`eng${i}`).innerHTML= lenguaje_deseado[indice_palabra]
        console.log(indice_palabra)
    }
}
cargar_item_al_dom()




// f
function leer(texto) {
    
}
function contar(params) {
    
}