"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); // quedo congelado el objeto sin poder de hacer modificaciones o eliminar

//producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto));