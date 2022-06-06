const precioTicket = 200;

let dtoEstudiante = 80;
let dtoTrainee = 50;
let  dtoJunior = 15;


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidad = document.getElementById("inputcantidad");
let categoria = document.getElementById("inputCategoria");

function quitarClaseError (){
    let x=document.querySelectorAll(".padron, .cantidad_compra, .categoria-compra, .mail");
    let i;
    for(i=0; i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}


function total_a_pagar(){

    quitarClaseError();

    if(nombre.value === ""){
        alert ("por favor inserte un nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }
    if(apellido.value === ""){
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }
    const emailValido= correo =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }
    if(!emailValido(correo.value)){
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }


    if(cantidad.value == 0){
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return;
    }


    if(categoria.value === ""){
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }
    let totalValorTickets =(cantidad.value)*precioTicket;

    if(categoria.value == 0){
        totalValorTickets =    totalValorTickets
    }

    if(categoria.value== 1){
        totalValorTickets=    totalValorTickets -(dtoEstudiante/100*totalValorTickets);
    }
    if(categoria.value== 2){
        totalValorTickets=    totalValorTickets -(dtoTrainee/100*totalValorTickets);
    }
    if(categoria.value== 3){
        totalValorTickets=    totalValorTickets -(dtoJunior/100*totalValorTickets);
    }

    totalPago.innerHTML =totalValorTickets;
}

verresumen.addEventListener("click", total_a_pagar);


function reset_total_a_pagar(){
    quitarClaseError();
    totalPago.innerHTML = "";
}

borra.addEventListener("click", reset_total_a_pagar);