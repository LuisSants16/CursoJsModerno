"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal(producto); // en comparacion a .freeze en .seal solamente podemos modificar pero no podemos agregar.

// Esto si puedo hacer , modificar algo que ya existe
producto.disponible = false;

// No podemos agregar algo nuevo porque esta sellado
// producto.imagen = "imagen.jpg"
// delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));