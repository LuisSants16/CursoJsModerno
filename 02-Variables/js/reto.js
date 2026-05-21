/*El Reto: El Script del Video Viral
Vas a simular el guión y el estado de un video musical a través de variables. Lee atentamente la historia para deducir qué valores van a cambiar y cuáles serán inmutables.

Parte 1: El Elenco (Preparativos)

Crea una variable para la protagonista, que será una "perrita hembra". Elige el nombre de variable que mejor la describa, sabiendo que su identidad NUNCA cambiará en la base de datos.

Crea otra variable para su compañero de escena, un "capibara negro". Esta característica tampoco va a mutar en todo el programa.

Parte 2: El Estado Inicial (Luces, cámara...)
3. Crea una variable para la acción actual de los personajes y asígnale el valor "bailando break dance".
4. Crea una variable para el nivel de energía de los personajes. Como acaban de empezar, ponlo en 100.
5. Crea una variable para las vistas del video y déjala sin inicializar (porque el video aún no se estrena y no tiene reproducciones).

Parte 3: ¡Acción! (El paso del tiempo)
6. ¡El video se publica! En una nueva línea, asígnale a la variable de las vistas el valor de 500.
7. Después de tanto break dance, los personajes se agotan. Cambia el nivel de energía a 15.
8. Como están cansados de bailar, cambian de actividad. Reasigna la acción actual a "cantando una canción en el sofá".

Reglas estrictas para tu código:

Prohibido usar var. Solo puedes usar let y const según corresponda.

Debes aplicar camelCase para cualquier variable que tenga más de una palabra.

Cero errores de sintaxis (cuidado con los caracteres no permitidos).*/

// Parte 1: El Elenco (Preparativos)
const perrita = "Nena";
const capibara = "Lorenzo";

// Parte 2: El Estado Inicial (Luces, cámara...)

let accion = "Bailando break dance";
let energia = 100;
let vistasVideo;

// Parte 3: ¡Acción! (El paso del tiempo)

// ¡El video se publica! En una nueva línea, asígnale a la variable de las vistas el valor de 500.
vistasVideo = 500;

// Después de tanto break dance, los personajes se agotan. Cambia el nivel de energía a 15.
energia -= 15;

// Como están cansados de bailar, cambian de actividad. Reasigna la acción actual a "cantando una canción en el sofá".
accion = "Cantando una cancion en el sofa";