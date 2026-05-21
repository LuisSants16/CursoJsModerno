let resultado;

// PI
resultado = Math.PI;

// Redondear
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.5);

// Redondear hacia arriba
resultado = Math.ceil(2.1) //Redondeo forzoso hacia arriba

// Redondear hacia abajo
resultado = Math.floor(2.9) //Redondeo forzoso hacia abajo

// Raiz Cuadrada
resultado = Math.sqrt(144);

// Absoluto(cambiar numero negativos a positivos)
resultado = Math.abs(-500);

// Potencia
resultado = Math.pow(2, 4);

// Minimo
resultado = Math.min(3,5,1,12,-3);

// Maximo
resultado = Math.max(3,5,1,12,-3);

// Aleatorio
resultado = Math.random() * 20;

// Aleatorio dentro de un rango..
resultado = Math.floor(Math.random() * 30);

// Aleatorio dentro de un rango 10 - 20
resultado = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(resultado);