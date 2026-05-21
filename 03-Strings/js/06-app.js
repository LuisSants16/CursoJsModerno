const producto = "Monitor 20 Pulgadas ";

// .repeat te va a permitir repetir una cadena de texto...
const texto = " en Promocion".repeat(2.4); // el numero redondeara por si solo

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// Split, dividir un string

const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, Caminar, Escuchar música, Escribir, Aprender a programar";
console.log(hobbies.split(","));

const tweet = "Aprendiendo Javascript #JSModernoConJuan";
console.log(tweet.split("#"));