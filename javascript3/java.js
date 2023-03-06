function empezar(event){
    event.preventDefault();
let valor = document.querySelector("#valor").value;
let mensaje1 = document.querySelector("#mensaje1");


// si valor no es un numero
if(!isNaN(valor)){
    mensaje1.innerHTML= `<h4>ES UN NÚMERO</h4>`;
}
// si siii es numero
if(isNaN(valor)){
    mensaje1.innerHTML= `<br> <h4>ES UNA LETRA</h4>`;
}
};

function empezar2(event){
    event.preventDefault();
    let mensaje2 = document.querySelector("#mensaje2");
    let resultado = Math.random()*100;
    resultado = Math.round(resultado);

    mensaje2.innerHTML= "<h3>" + resultado + "</h3>";

}