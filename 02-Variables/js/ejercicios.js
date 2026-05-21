/*
Ejercicio 1: El cambio de planes (Nivel Básico)
Crea una variable usando la forma moderna (let) llamada cursoActual y asígnale el valor "JavaScript Básico". Luego, simula que el usuario avanzó de nivel y reasigna el valor de esa misma variable a "JavaScript Moderno".

Objetivo: Demostrar cómo declarar y mutar una variable correctamente.
*/

let cursoActual = "Javascript Basico";
console.log(cursoActual)

cursoActual = "Javascript Moderno"
console.log(cursoActual)

/*
Ejercicio 2: La regla de oro inquebrantable (Nivel Básico-Intermedio)
Imagina que estás construyendo un sistema para una tienda y el impuesto de venta (IVA) nunca cambiará; siempre será 0.18. Escribe el código exacto para declarar esta constante.

Pregunta adicional: ¿Qué pasaría si intentas declararla primero (ej. dejar la variable vacía) y en la línea de abajo le asignas el 0.18?

Objetivo: Aplicar la inicialización obligatoria de const.
*/

const impuesto = 0.18;
//Daria error , ya que una constante simpre debe inicializar con un valor.

/*
Ejercicio 3: El inspector de código (Nivel Intermedio)
A continuación te presento 5 intentos de crear variables, pero algunos tienen errores sintácticos que romperán el programa por no seguir las reglas de nombrado. Identifica cuáles son inválidos y explica por qué:

let 1erLugar = "Juan"; NO VALIDO(Una variable no puede iniciar con un numero)

var _puntuacion = 100; VALIDO(Una variable si puede iniciar con un guion abajo)

const nombre de usuario = "Admin"; NO VALIDO(Una variable no debe tener espacios)

let tipo_de_suscripcion = "Premium"; VALIDO(Una variable si puede estar conectados por guiones abajo)

let primer-apellido = "Pérez"; VALIDO(INCORRECTO (Dará error). * El motivo: En JavaScript, el guion medio (-) está estrictamente reservado para la resta matemática. Si escribes primer-apellido, JavaScript piensa que estás intentando restar una variable llamada apellido de otra variable llamada primer. Los únicos caracteres especiales permitidos para unir palabras en los nombres de variables son el guion bajo (_) y el signo de dólar ($). Lo ideal aquí sería usar camelCase: let primerApellido = "Pérez";.)

Objetivo: Reconocer las reglas de caracteres y espacios permitidos.
*/

/*Ejercicio 4: Diseñando el carrito de compras (Nivel Avanzado)
Vas a crear 3 variables para un producto en una tienda online usando las mejores prácticas modernas (let y const, olvidemos var). Piensa bien cuál debe poder cambiar y cuál no:

Una variable para el nombre del producto (ej. "Teclado Mecánico"), asumiendo que el nombre del producto en la base de datos nunca va a cambiar.

Una variable para el precio (ej. 50), asumiendo que podría haber descuentos en el futuro.

Una variable para el estado de stock (ej. true si hay, o false si se agota).

Objetivo: Discernir cuándo es apropiado usar let y cuándo const en un caso de la vida real.*/

const producto_01 = "Teclado Mecánico";

let precio = 50;

let stock;

/*
Ejercicio 5: El cazador de bugs (Nivel Experto)
Te acaban de contratar en una empresa y te piden que arregles el siguiente bloque de código antiguo y defectuoso. Tu misión es 1) encontrar los dos errores fatales que harán que el programa colapse, y 2) reescribir el código usando las prácticas modernas (let/const) para que funcione perfecto.
*/

/*
JavaScript
var categoriaProducto = "Electrónica";
const numeroDeSerie;
numeroDeSerie = "A1920-X";
*/

const numeroDeSerie = "A1920-X"

/*
let precioBase = 100;
precioBase = "Cien dólares";
*/

let precioBase = 100;
precioBase = 100;

/*
const descuentoMaximo = 20;
descuentoMaximo = 30;
Objetivo: Analizar código existente, detectar violaciones a las reglas de reasignación y mutabilidad, y modernizar el código.
*/

const descuentoMaximo = 20;

const descuentoMaximo2 = 30;

