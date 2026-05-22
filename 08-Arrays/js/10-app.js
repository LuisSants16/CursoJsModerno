const carrito = [
    {nombre : "Monitor 27 Pulgadas", precio: 500},
    {nombre : "Televisión", precio: 100},
    {nombre : "Tablet", precio: 200},
    {nombre : "Audifonos", precio: 300},
    {nombre : "Teclado", precio: 400},
    {nombre : "Celular", precio: 700}
]

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio : ${producto.precio}`)
})

// en .forEach no podemos usar return jamas retorna nada

const nuevoArreglo2 = carrito.map( function(producto){
    return `${producto.nombre} - Precio : ${producto.precio}`
})

//forEach y map son casi iguales pero hay una diferencia basicamos .map te crear un arreglo nuevo y en algunas veces queremos crear nuevos arreglos como por ejemplos productos que cuesten mas de 300 y asi
// Si podemos usar return.

console.table(nuevoArreglo2);