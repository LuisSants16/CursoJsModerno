// Paso 1
let promptCrudo = "   nena la perrita bailando break dance con lorenzo el capibara   ";
promptCrudo = promptCrudo.trim().toUpperCase();
promptCrudo = promptCrudo.replace("BAILANDO BREAK DANCE", "CANTANDO EN EL SOFÁ");

// Paso 2
let fotogramas = 4500;
fotogramas -= Math.pow(10, 3);

const residuoFrames = fotogramas % 2;

// Paso 3
const pesoEstimado = "1045.89mb";
const pesoFinal = Math.ceil(Number.parseFloat(pesoEstimado) + Math.sqrt(144));

// Paso 4
const cantidadPalabras = promptCrudo.split(" ").length;
const codigoAleatorio = Math.floor(Math.random() * (999 - 100 + 1) + 100);
const barraCarga = "#".repeat(10);

console.log(`
    Prompt Final:${promptCrudo}
    Palabras detectada: ${cantidadPalabras}
    ID de Tarea: TSK-${codigoAleatorio}
    Fotogramas a procesar: ${fotogramas}
    Prueba de paridad (0 es par): ${residuoFrames}
    Espacio reservado en disco: ${pesoFinal}MB
    Renderizando: ${barraCarga}
    `);