"use strict";

/*
Bienvenido al Proyecto "Astro-V": Sistema de Navegación Interestelar.

🚀 EL MEGA RETO: PROYECTO ASTRO-V
Fase 1*/

let textoConEspacio = "   peligro asteroide inminente   ";
textoConEspacio = textoConEspacio.trim().toUpperCase();

const distancia = "9876.54ly";
const distanciaCalculada = Math.ceil(Math.sqrt(parseFloat(distancia)));

console.log(distanciaCalculada);

//Fase 2

const motorBase = {
    id : 896101,
    estado : "Apagado"
}
Object.freeze(motorBase);

const tanques = {
    capacidadMax : 100,
    nivelActual : 100
}
Object.seal(tanques);
tanques.nivelActual = 50;

console.log(tanques)

//Fase 3

function Astronauta(nombre,rango){
    this.nombre = nombre;
    this.rango = rango;
    this.reportarse = function(){
        console.log(`Aquí el ${this.rango} ${this.nombre}, listo para despegar`);
    }
}

const Astronauta2 = new Astronauta("Shepard","Comandate");

Astronauta2.reportarse();

//Fase 4

const naveDatos = {
    nombre : "Astro-V",
    coordenadas :{
        x : 15,
        y : 30,
        z : 100
    }
}

const naveDefinitiva = {...motorBase,...tanques,...naveDatos, tripulante:Astronauta2};

const {nombre,coordenadas:{z}} = naveDefinitiva;

console.log(nombre);
console.log(z);

//Fase 5

const {nivelActual } = tanques;

const sensoresOK = nivelActual === "50";

console.log(sensoresOK ? "¡Despegue Exitoso!" : "Abortar: Discrepancia en sensores");

console.log(Object.keys(naveDefinitiva));
console.log(Object.values(naveDefinitiva));
console.log(Object.entries(naveDefinitiva));