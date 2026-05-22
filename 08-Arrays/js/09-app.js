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

// En for no lo podemos hacer , tendriamos que renombrar el arreglo original
for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} con un precio de: ${carrito[i].precio}`)
}

//for y forEach hacen lo mismo - ambos se comportan igual

//sin embargo en forEach aqui tenemos la ventaja de poner el nombre que queramos
carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio : ${producto.precio}`)
})