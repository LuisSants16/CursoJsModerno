const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1Kg",
    medida: "1m"
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);
const resultado2 = {...producto, ...medidas} // Esta version es la mas recomendada o usada

console.log(resultado);
console.log(resultado2);