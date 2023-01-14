'use strict'

//Pruebas con let y var

//Prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor
}

console.log(numero); //valor 50

//Prueba con let
let texto = "Curso JavaScript";
console.log(texto); //valor JS

if(true){
    let texto = "curso Laravel 5"; 
    console.log(texto); //Valor larabel
}

console.log(texto); //Valor JS