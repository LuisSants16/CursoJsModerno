
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

const producto4 = {
    nombre: "Celular 2",
    precio: 100
}

// .unshift para posicionar siempre al principio en un arry
carrito.unshift(producto3);
carrito.push(producto4);

console.table(carrito);

/*
// Eliminar último elemento de un arreglo...
carrito.pop()
console.table(carrito);

// Eliminar del inicio del carrito
carrito.shift()
console.table(carrito);
*/

// eliminar elementos
/*
carrito.splice(1, 1); // Se eliminara el segundo elemento
console.table(carrito);
*/

//carrito.splice(2, 1); // Se eliminara el tercer elemento

carrito.splice(1, 3); // Se eliminara 3 elementos
console.table(carrito);

