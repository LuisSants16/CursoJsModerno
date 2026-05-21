
// Destructuring con Arreglos
const numeros = [10,20,30,40,50];

/*
const [ primero , , , cuarto] = numeros;
const [ , segundo] = numeros;

console.log(cuarto);
console.log(segundo);
*/

// los ultimos 3 elementos que sean un solo arreglo

const [ primero , segundo , ...tercero] = numeros;
console.log(tercero);