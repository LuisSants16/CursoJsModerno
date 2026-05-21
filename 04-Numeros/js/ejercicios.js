
// Ejercicio 1:
const numeroEntero = 100;
const numeroDecimal = 20.50;

// Ejercicio 2:
const precio = 300;
const cantidad = 3;

const total = precio * cantidad;
console.log(total);

// Ejercicio 3:
const numeroMagico = 25;
console.log(numeroMagico % 2);//Da resultado 1 , si es impar

// Ejercicio 4:
let nota = 8.6;
console.log(Math.round(nota));

// Ejercicio 5:
let muro = 4.1;
console.log(Math.ceil(muro));
console.log(Math.floor(muro));

// Ejercicio 6:
let raiz = Math.sqrt(81);
console.log(raiz);

let potencia = Math.pow(3, 4);
console.log(potencia);

// Ejercicio 7:
let saldo = -1500;
console.log(Math.abs(saldo));

// Ejercicio 8:
let puntajeMaximo = Math.max(15,42,8,99,23);
let puntajeMinimo = Math.min(15,42,8,99,23);

console.log(puntajeMaximo);
console.log(puntajeMinimo);

// Ejercicio 9:
console.log(Math.random());

// Ejercicio 10:
let randomNumero = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
console.log(randomNumero);
    
// Ejercicio 11:
let carritoCompra = (10 + 20 + 30) * 1.18;
console.log(carritoCompra);

// Ejercicio 12:
let likes = 50;
++likes;

// Ejercicio 13:
let vida = 1000;
vida -= 250;

// Ejercicio 14
const edadUsuario = "28.5";
let edadUsuarioEntero = Number.parseInt(edadUsuario);
console.log(Number.isInteger(edadUsuarioEntero));