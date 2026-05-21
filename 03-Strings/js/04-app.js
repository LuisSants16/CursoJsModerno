const producto = "           Monitor 20 Pulgadas           ";

console.log(producto);
console.log(producto.length);

// Eliminar caracteres desde el inicio...
console.log( producto.trimStart() );

// Eliminar caracteres desde el final...
console.log( producto.trimEnd() );

// Eliminar caracteres en ambas direcciones...
console.log( producto.trimStart().trimEnd() );

// Eliminar caracteres en ambas direcciones version antigua...
console.log( producto.trim() )