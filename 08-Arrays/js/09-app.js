// Veremos algunos metodos para arreglos luego veremos mas

const carrito = [
    {nombre : "Monitor 27 Pulgadas", precio: 500},
    {nombre : "Televisión", precio: 100},
    {nombre : "Tablet", precio: 200},
    {nombre : "Audifonos", precio: 300},
    {nombre : "Teclado", precio: 400},
    {nombre : "Celular", precio: 700}
]

console.table(carrito);

for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} con un precio de: ${carrito[i].precio}`)
}

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio : ${producto.precio}`)
})