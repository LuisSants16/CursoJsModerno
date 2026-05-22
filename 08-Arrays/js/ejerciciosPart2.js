"use strict";

// Ejercicio 5 avanzado
const codigos = ["Alfa","Bravo","Charlie","Delta","Echo"];

const principal = [codigos[0]];
const secundario = [codigos[2]];

const sobrantes = [codigos[1], ...codigos.slice(3)];

console.log(principal);
console.log(secundario);
console.log(sobrantes);

// Ejercicio 6 avanzado
const servidores = [
    { id: 1, estado: "Activo" },
    { id: 2, estado: "Mantenimiento" },
    { id: 3, estado: "Apagado" }
];

servidores.forEach(function(i){
    console.log(`El servidor ${i.id} se encuentra ${i.estado}`);
})

// Ejercicio 7 avanzado
const precios = [100,500,1000];

const preciosConIva = precios.map(function(IVA){
    return IVA * 1.20;
})

console.table(preciosConIva);

// Ejercicio 8 avanzado
const listaEstado = servidores.map(function(server){
    return server.estado
})

console.table(listaEstado);

console.log("")
console.log("=========================================")
console.log("")

// Ejercicio 9 avanzado
const naves = ["Apolo","Artemis","Gemini","Sputnik","Voyager"];

const [naveInsignia,escolta,...flotaReserva] = naves;

console.log(naveInsignia);
console.log(escolta);
console.table(flotaReserva);

// Ejercicio 10 avanzado
const radares = [
    {zona:"Norte",alerta:true},
    {zona:"Sur",alerta:false},
    {zona:"Este",alerta:true}
];

radares.forEach(function(radar){
    if (radar.alerta){
        console.log(`¡Peligro en la zona ${radar.zona}!`)
    };
});

// Ejercicio 11 avanzado
const temperaturas = [25,30,15];

const reporteTermico = temperaturas.map(function(temp){
    return `Lectura actual: ${temp}°C`
});

console.table(reporteTermico);

// Ejercicio 12 avanzado
const tripulantes = [
    {nombre: "Zoe", sueldo:1000},
    {nombre: "Mal", sueldo:2000}
]

const bonos = tripulantes.map(function(tripulante){
    return tripulante.sueldo * 1.5;
});

console.table(bonos);

// Ejercicio 13 avanzado
const colaDeTareas = [];

colaDeTareas.push("Calibrar motor");
colaDeTareas.unshift("Revisar oxígeno");

colaDeTareas.forEach(function(cola){
    console.log(`Tarea pendiente: ${cola}`)
})



