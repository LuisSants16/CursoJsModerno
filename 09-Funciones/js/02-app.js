
// Declaració de Función (Function Declaration)
sumar();
function sumar(){
    console.log( 2 + 2 );
} // -> Este funciona bien

// Expresión de Función (Function Expression)
sumar2();
const sumar2 = function(){
    console.log( 3 + 3 );
} // -> Este no esta funcionando

/*
Eso pasa porque JavaScript se ejecuta en dos vueltas , se le conoce como hosting. La primera vuelta lo que hace Javascript es escanear este documento y registra todas las funciones y determina que variables va a crear esta etapa se le conoce como la etapa de creación, es decir nuestro codigo comienza a leerse y dice bueno, aqui hay una funcion , la voy a registrar.
En la segunda vuelta , que es cuando ejecutamos esa funcion , ya esta registrada
*/