"use strict";

//Módulo 1: Base de Datos (Arrays y Objetos)
const catalogo = [
    {id : 101010 , nombre : "Monitor 27 Pulgadas", precio: 500},
    {id : 202020 , nombre : "Televisión", precio: 100},
    {id : 303030 , nombre : "Tablet", precio: 200},
];

const cliente = {
    alias : "Luis",
    creditos : 1000,
    carrito : [],
    procesarPago:function(){
        console.log("Procesando pago en el servidor...");
    }
}

//Módulo 2: Operación del Usuario (Destructuring y Mutación)
const [ item1 , , item3 ] = catalogo;

cliente.carrito.push(item1,item3);

//Módulo 3: Motor de Cálculo (forEach y Math)
let total = 0;

cliente.carrito.forEach(function({precio}){
    total += precio;
});

const totalConImpuesto = Math.ceil(total * 1.16);

//Módulo 4: El Sistema de Descuentos (Strings)
let cuponCrudo = "   cYbEr_pUnK_20   ";
let cupon = cuponCrudo.trim().toUpperCase().replaceAll("_"," ");

//Módulo 5: Facturación y Cierre (map y Template Literals)
const ticketItem = cliente.carrito.map(function({nombre,precio}){
    return `-> ${nombre} - S/ ${precio}`;
});


if (cliente.creditos >= totalConImpuesto) {

    cliente.procesarPago();
    cliente.creditos -= totalConImpuesto;

    console.log(`Gracias por tu compra ${cliente.alias}`);
    console.log(`Cupón usado: ${cupon}`);
    console.log(`Saldo restante: ${cliente.creditos}`);

    console.table(ticketItem);

} else {
    console.log("No tienes suficientes créditos");
}