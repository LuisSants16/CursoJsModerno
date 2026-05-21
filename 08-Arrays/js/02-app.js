const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros);

// Acceder al arreglo
console.log(numeros[2]);
console.log(numeros[0]);
console.log(numeros[20]); // nos arrogara undefined

// Acceder un array de otro array

const numeros2 = [10,20,30,40,50, [1,2,3]];
console.log(numeros2[5],[1]);
console.table(numeros2[5],[1]);