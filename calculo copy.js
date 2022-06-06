
/*
function multiplicarDosNumeros(numero1, categoria, numero3){
    if(categoria ==="Estudiante"){
    return numero3*0.2*numero1;
    }
}
*/

var numero1 = document.getElementById ('inputcantidad');
console.log(numero1);
var numero2 = document.getElementById ('inputCategoria');
console.log(numero2);
var numero3 = 200;
console.log(numero3);
var resultado = document.getElementById ('resultado');
var total = document.querySelector("p__total");

var boton = document.getElementById ('resumen');


/*
boton.addEventListener('click', function() {
     
    total.textContent = "Total a Pagar: $" + multiplicarDosNumeros(numero1.value, numero2.value, numero3.value);
    console.log(total.textContent)
    });
*/



function multiplicarDosNumeros(cantidad,importe){
    return cantidad * importe;
}

console.log(cantidad,importe)

var boton =document.querySelector ('.resumen');

var cantidad = document.querySelector ('.cantidad_compra');
console.log(cantidad);

var importe = 200;
console.log(importe);

var resultado = document.querySelector('.resultado');
console.log(resultado);

//var resultado = document.querySelector ('.resultado');


//var total = document.querySelector(".p__total");

//total.textContent= "Total a Pagar: $" + resultado;



boton.addEventListener('click', function() {
     
    resultado.textContent = multiplicarDosNumeros(cantidad.value,importe.value);

    });


//var titulo = document.querySelector(".titulo"); /*muestra el objeto h1 por medio de la clase o etiqueta*/
//console.log(titulo)
//console.log(titulo.textContent);/*solo muestra el contenido del h1*/
//titulo.textContent= "Buena Vida Nutricion"; /*Sirve para cambiar titulo u otra cosa*/
//console.log("estoy probando");
//document.querySelector (solo selecciona el primer elemento)
// imc.toFixed(2) ME PONE 2 DECIMALES    


/*


function multiplicarDosNumeros(numero1, numero2){
        return numero1 * numero2;
    }

 var boton = buscarElemento ('.boton');
 var numero1 = buscarElemento ('.numero1');
 var numero2 = buscarElemento ('.numero2');
 var resultado = buscarElemento ('.resultado');

 boton.addEventListener('click', function() {
     
    resultado.textContent = multiplicarDosNumeros(numero1.value, numero2.value);

    });

    */