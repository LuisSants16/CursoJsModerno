const producto = "Monitor 20 Pulgadas";

// .replace para reemplazar
console.log(producto);
console.log(producto.replace("Pulgadas",'"'));
console.log(producto.replace("Monitor", "Monitor Curvo"));

// .Slice para cortar
console.log(producto.slice(0,10)); // desde el primer caracter 0 hasta el caracter 10
console.log(producto.slice(8)); // empieza desde la posicion 8 hacia adelante
console.log(producto.slice(2,1)) // en este caso no hara nada ya que el primer numero no puede empezar mayor

// Alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); // en este caso hara algo , en voltear los numero substring es mas inteligente


// Dos opciones para cortar la primera letra de nuestro nombre tipo como Gmail
const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));