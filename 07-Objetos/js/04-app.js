const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Version antigua
//const nombre = producto.nombre;
//console.log(nombre);

// Destructuring (Version nueva recomendada)
const {nombre,precio,disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);