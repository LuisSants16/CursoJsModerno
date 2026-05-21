/* RETO 1 :
    🚀 EL RETO COMBINADO (Variables + Strings + Números)
    Tal como acordamos, aquí tienes un escenario completamente nuevo. Hoy vas a programar el Sistema de Navegación de una Nave Espacial. Tendrás que mezclar textos, limpieza de datos, cálculos matemáticos y conversiones.

    Lee los pasos y crea el código de arriba a abajo:

    Paso 1: Identificación de la nave (Strings)
    Crea una variable modificable (let) llamada nombreNave con el valor "   explorador estelar   ".
    En la siguiente línea, reasígnala para quitarle los espacios de los lados y convertirla a MAYÚSCULAS.

    Paso 2: Cálculo de combustible (Math)
    Los sensores indican un nivel de combustible inestable. Crea una variable inmutable (const) llamada nivelSensor con el valor 85.9.
    Crea otra variable inmutable llamada combustibleSeguro que tome el nivelSensor y lo redondee hacia abajo (para no sobreestimar la energía).

    Paso 3: Trayectoria y Atajos (Operadores Numéricos)
    Crea una variable modificable (let) llamada distanciaLuz con el valor 1000.
    De pronto, la nave entra en un agujero de gusano que reduce la distancia a la mitad. Usa el operador de atajo de división (/=) para dividir esa variable entre 2.

    Paso 4: Decodificando las coordenadas (Conversión y Concatenación)
    Interceptas un mensaje alienígena con la coordenada del destino, pero llega como texto y con decimales falsos: const coordenadaFalsa = "42.8";.
    Crea una constante coordenadaReal que convierta ese texto a un número entero (ignorando el .8).
    Luego, crea una constante sectorDestino que convierta esa coordenadaReal a String y le sume el prefijo "SEC-" (debería quedar "SEC-42").

    Paso 5: La Bitácora de Vuelo (Template Literals)
    Imprime en consola el reporte final inyectando todas tus variables procesadas:

    --- BITÁCORA DE VUELO ---
    Nave: EXPLORADOR ESTELAR
    Combustible disponible: 85%
    Distancia restante: 500 años luz
    Destino fijado: SEC-42
*/

// Paso 1
let nombreNave = "   explorador estelar   ";
nombreNave = nombreNave.toUpperCase().trim();

// Paso 2
const nivelSensor = 85.9;
const combustibleSeguro = Math.floor(nivelSensor);

// Paso 3
let distanciaLuz = 1000;
distanciaLuz /= 2;

// Paso 4
const coordenadaFalsa = "42.8";
const coordenadaReal = Number.parseInt(coordenadaFalsa);
const sectorDestino = `SEC-${coordenadaReal}`;

// Paso 5
console.log(
    `      --BITÁCORA DE VUELO--
    Nave: ${nombreNave}
    Combustible disponible: ${combustibleSeguro}%
    Distancia restante: ${distanciaLuz} años luz
    Destino fijado: ${sectorDestino}
    `
);

console.log("======================================");

// Paso 1
let cuentaCruda = "   cta-9923-Bcx   ";
let cuentaLimpia = cuentaCruda.trim().toUpperCase().slice(4,-4);

// Paso 2
const saldoEncriptado = "250.75usd";
const saldoReal = Math.floor((Number.parseFloat(saldoEncriptado) * Math.sqrt(144)));

// Paso 3
const pinAcceso = Math.floor(Math.random() * (50 - 10 + 1) + 10);
const tokenFinal = `${pinAcceso.toString()}X`;

// Paso 4
let miBilletera = 0;
miBilletera += saldoReal;

// Paso 5
console.log(`
        ---REPORTE DE EXTRACIÓN---
        *Cuenta Vulnerada:*${cuentaLimpia.replace("99","")}
        Token utilizado : ${tokenFinal}
        Monto extraído: $${miBilletera}
        Estado: ÉXITO. Sistema comprometido.
    `);

//
console.log("======================================");
//

let protagonista = "   nena la perrita   ";
protagonista = protagonista.trim().toUpperCase();

let vista = 500;
vista += 150;

console.log(`El video de ${protagonista} tiene ${vista} vistas.`);

//
console.log("======================================");
//

const puntajeCrudo = "Calificación: 8.9";

const puntajeCortado = puntajeCrudo.slice(13)

const puntajeFinal = Number.parseFloat(Math.round(puntajeCortado));

console.log(puntajeFinal);

//
console.log("======================================");
//

const pagoBase = "1050.80usd";
const bonus = "200.50";

const gananciaReal = Math.floor(Number.parseFloat(pagoBase) + Number.parseFloat(bonus));

const idTransaccion = Math.floor(Math.random() * (100 - 1 + 1) + 1);

console.log(`Transferencia al capibara: $${gananciaReal} | ID:TX-${idTransaccion}`)


