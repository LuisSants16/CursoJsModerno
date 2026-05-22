"use strict";

// Ejercicio 1
const inventario = ["Linterna", 50, true, {id: 1, nombre: "Llave"}];

console.table(inventario);

// Ejercicio 2
const matriz = [10, 20, 30, [40, 50]];

console.log(matriz[2]);
console.log(matriz[3][1]);

// Ejercicio 3
const meses = ["Enero", "Febrero", "Marzo"];

meses[0] = "Primer Mes";
meses[3] = "Abril";

console.table(meses);

// Ejercicio 4
const carrito = []

const producto1 = {
    nombre: "Mouse"
}

const producto2 = {
    nombre: "Teclado"
}

carrito.push(producto1);
carrito.unshift(producto2);

console.table(carrito);

// Ejercicio 5
const tareas = ["Lavar", "Barrer", "Cocinar", "Planchar", "Trapear"];

tareas.pop();
tareas.shift();

tareas.splice(1,1);

console.table(tareas);

// Ejercicio 6
const frutas = ["Manzana", "Pera", "Plátano", "Fresa"];

for(let i = 0; i < frutas.length; i++ ){
    console.table(frutas[i]);
}

console.log("");
console.log("==================================");
console.log("");

// Nivel Avanzado: Arreglos Base (01 al 07)

// Ejercicio 1 Avanzado
const boveda = [100, 200, [300, 400, ["Secreto", 500]], 600];
console.log(boveda[2][2][0] = "Hackeado");
console.table(boveda);

// Ejercicio 2 Avanzado
const impresora = ["Doc_B", "Doc_C"];

impresora.unshift("Doc_A");
impresora.push("Doc_D");

console.table(impresora);

impresora.shift();
impresora.pop();

console.table(impresora);

// Ejercicio 3 Avanzado
const archivos = ["Virus_1","Foto","Video","Virus_2","Documento"];

archivos.splice(0,1);
archivos.splice(-2,1);

console.table(archivos);

// Ejercicio 4 Avanzado
const sensores = [15,50,10,80];

const alertas = [];

for(let i = 0; i < sensores.length; i++){
    if(sensores[i] > 30){
        alertas.push(sensores[i]);
    }
}

console.table(alertas);