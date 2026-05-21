
meses = ["Enero","Febrero","Marzo","Abril"];

// Agregar al final de arreglo
meses.push("Abril");
meses.push("Mayo");

console.table(meses);

console.log("===========================================");

const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio : 800
}

// .push agrega al final de un arreglo

carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// .unshift para posicionar siempre al principio en un arry
carrito.unshift(producto3);

console.table(carrito);