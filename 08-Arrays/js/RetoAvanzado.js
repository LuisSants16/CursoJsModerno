"use strict";

//🧬 PROYECTO: QUIMERA (Reto Avanzado Integrador)

// Fase 1: Descontaminación de Variables (Strings y Math)
let lecturaRadiacion = "   845.99_rads_t0xic0s   ";

const radiacionNeta = Math.ceil(parseFloat(lecturaRadiacion.trim().replace("_rads_t0xic0s"," ")) / 3);

// Fase 2: El Sujeto Cero (Objetos, Mutabilidad Profunda y Destructuring)
const quimeraBase = {
    nombre: "Sujeto Cero",
    atributos:{
        fuerza: 100,
        agilidad: 50
    },
    sistema:{
        nervioso: "Estable",
        bloqueos: true
    }
}

Object.freeze(quimeraBase.sistema);
Object.seal(quimeraBase);

//quimeraBase.sistema.bloqueos = false;
quimeraBase.atributos.fuerza = 200;

const {nombre,sistema:{nervioso}} = quimeraBase;

// Fase 3: Secuenciación Genética (Arrays, Spread y Rest)
const genomaA = ["Alfa", "Beta"];
const genomaB = ["Gamma", "Delta"];

const genomaCompleto = [...genomaA, ...genomaB, "Omega"];

const [genPrimario, , genTerciario, ...genesInestables] = genomaCompleto;

console.log(genPrimario);
console.log(genTerciario);
console.log(genesInestables);

// Fase 4: Análisis de Viabilidad (Iterador map)
const clones = [
    { id: "C1", tasaSupervivencia: 0.4, estable: false },
    { id: "C2", tasaSupervivencia: 0.9, estable: true },
    { id: "C3", tasaSupervivencia: 0.8, estable: true }
];

/*
2. Crea una constante llamada `analisisViabilidad`.
3. Usa el método `.map()` sobre los `clones`. Debes retornar un arreglo de textos con el formato exacto: *"Clon [id]: Viabilidad del [tasaSupervivencia multiplicada por 100]%"*.*/

const analisisViabilidad = clones.map(function(clon){
    return `Clon ${clon.id}: Viabilidad del ${clon.tasaSupervivencia * 100}%`
})

console.table(analisisViabilidad);

/*
**Fase 5: Filtrado Manual (Iterador forEach y push)**
Todavía no hemos visto el método para filtrar automáticamente, ¡así que lo vas a construir tú mismo usando la lógica pura!
1. Crea un arreglo vacío: `const clonesAprobados = [];`
2. Usa el método `.forEach()` para recorrer el arreglo original `clones`.
3. **Dentro de la función iteradora**, usa un bloque `if` para evaluar si el clon actual tiene la propiedad `estable` en `true`.
4. Si es verdadero, utiliza el método `.push()` para meter **únicamente el `id`** de ese clon dentro de tu arreglo `clonesAprobados`.
5. Imprime en consola tu arreglo final `clonesAprobados`. (Debería mostrar solo `["C2", "C3"]`).
*/

const clonesAprobados = [];

clones.forEach(function(clonTrue){
    if (clonTrue.estable == true){
        clonesAprobados.push(clonTrue.id);
    }
})

console.table(clonesAprobados);