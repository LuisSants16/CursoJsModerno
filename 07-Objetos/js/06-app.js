const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion:{
        medidas:{
            peso: "1Kg.",
            medida: "1Mt."
        },
        fabricacion:{
            pais: "China"
        }
    }
}

const {nombre, informacion, informacion:{fabricacion, fabricacion:{pais}}} = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);

// peso 

const {informacion:{medidas:{peso}}} = producto;

// medida

const {informacion:{medidas:{medida}}} = producto;

console.log(peso);
console.log(medida);