const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// si recordamos las constantes no pueden ser reasignadas

// sin embargo al estar en un objeto sus propiedad si se pueden reasignar o eliminar
producto.disponible = false;
delete producto.precio;

console.log(producto);
