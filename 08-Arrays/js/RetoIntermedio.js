//🌌 OPERACIÓN: CAZARRECOMPENSAS (Reto Intermedio)

// Fase 1: Cálculos de Hiperespacio (Strings y Math)
let distanciaCruda = "   850.75_parsecs   ";

const disctanciaNum = parseFloat(distanciaCruda.trim().replace("_parsecs"," "));

const distanciaFinal = Math.round(disctanciaNum);

console.log(distanciaFinal);

// Fase 2: El Expediente (Objetos, Seguridad y Destructuring)
const Objetivo = {
    alias: "Zark",
    peligrosidad: "Alta",
    ubicacion:{
        planeta: "Orion",
        secto: 4
    }
}

Object.freeze(Objetivo.ubicacion);

const {alias,ubicacion:{planeta}} = Objetivo;

console.log(alias);
console.log(planeta);

// Fase 3: Alianzas Temporales (Arreglos y Spread Operator)
const escuadronAlfa = ["Francotirador", "Piloto"];

const escuadronOmega = ["Hacker", "Médico"];

const equipoAsalto = [...escuadronAlfa, ...escuadronOmega, "Droide de Combate"];

// Fase 4: El Gremio Cobra su Parte (Iteradores: map)

// 1 Crea este arreglo
const contratos = [
    { id: "A1", recompensa: 2000 },
    { id: "B2", recompensa: 5000 },
    { id: "C3", recompensa: 8000 }
];

/*
2. El Gremio de Cazarrecompensas te cobra un 10% de impuesto por cada misión. Crea una constante llamada `pagosNetos`.

3. Utiliza el método `.map()` sobre los `contratos` para retornar un **arreglo de textos**. La función debe retornar un Template Literal que diga: *"Contrato [id]: Ganancia limpia de [recompensa multiplicada por 0.9] créditos"*.

*/

const pagosNetos = contratos.map(function(Pn){
    return `Contado ${Pn.id}: Ganancia limpia de ${Pn.recompensa * 0.9}`;
})

console.table(pagosNetos);


/*Fase 5: Despliegue Táctico (Iteradores: forEach)**
Es hora de aterrizar.
1. Utiliza el método `.forEach()` para recorrer tu arreglo `equipoAsalto` (el que creaste en la Fase 3).
2. Dentro de la función iteradora, imprime en consola: *"Desplegando al [miembro del equipo] en el terreno."*/

equipoAsalto.forEach(function(miembro){
    console.log(`Desplegando al ${miembro} en el terreno.`);
});
