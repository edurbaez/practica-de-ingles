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
        //console.log(indice_palabra)
    }
}
//cargar_item_al_dom()




// freporduccion de las palabras
var leer_parar= false;
var item=1;
velocidad= 2000;
function leer(texto="hello, my friend") {
    let textoaleer= document.getElementById(`eng${item}`)
    bgcolor(textoaleer);
    let lectura= new SpeechSynthesisUtterance(textoaleer.innerHTML)
    speechSynthesis.speak(lectura)
    item++
    if (item==6) {
        cargar_item_al_dom()
        item=1
    }
    if (leer_parar== true) {
        lectura.onend(
            setTimeout(() => {
            leer()
        }, velocidad))
    }
}

// play stop
const play_stop=()=>{
    let e= document.getElementById("play_stop")
    if (e.innerHTML== ".leer.") {
        e.innerHTML= ".parar."
        leer_parar= true
        leer()
    }else{
        e.innerHTML= ".leer."
        leer_parar= false
    }
}

//leer()
function contar(params) {
    
}

/// coloar el item leido
function bgcolor(textoaleer){
    let color= `rgb(
        ${100+Math.random()*100},
        ${150+Math.random()*100},
        ${200+Math.random()*50}
        )
    `;
    textoaleer.parentElement.style.background=color;
    setTimeout(() => {
        textoaleer.parentElement.style.background="white";
    }, 800);
};
    
///funcion para deplegar la lista de palabras
var visulalizar_lista= false;
function lista() {
    let lista= document.getElementById("lista")
    if (!visulalizar_lista) {
        lista.innerHTML= `
        <table style="width: 90%;text-align: center;">
            <th >
                <tr>
                    <td style="background:grey;">español</td> 
                    <td style="background:grey;">ingles</td> 
                </tr>
            </th>
            <tbody id="tbody">
                ${gen_lista()}
            </tbody>
        </table>
        `;
        visulalizar_lista= true
    } else {
        lista.innerHTML='<h3 id="lst" style="text-align: center ;">ver lista</h3>'
        visulalizar_lista= false
    }
}
function gen_lista() {
    let lista_relleno
    for (let i = 0; i < lenguaje_actual.length; i++) {
        lista_relleno += `
        <tr>
            <td>${lenguaje_actual[i]}</td> 
            <td>${lenguaje_deseado[i]}</td> 
        </tr>
        `;
    }
    return lista_relleno
}

//
document.getElementById("lista").addEventListener("click",()=>{
    lista()
})