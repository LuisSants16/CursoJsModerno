// Ejercicio 14
"use strict";

const escudo = {
    defensa : 100,
    material : "Hiero"
}

Object.freeze(escudo);

console.log(Object.isFrozen(escudo));

// Ejercicio 15
const pocion = {
    tipo : "Curación",
    cantidad : 50
}

Object.seal(pocion);

pocion.cantidad = 20;

console.log(Object.isSealed(pocion));

// Ejercicio 16
const espada = { nombre: "Espada Larga", daño: 35 };

const encantamiento = { magia: "Fuego", bonus: 15 };

const armaDefinitiva = {...espada , ...encantamiento};

console.log(armaDefinitiva);

// Ejercicio 17
const guerrero = {
    nombre : "Thor",
    clase : "Vikingo",
    gritoBatalla:function(){
        console.log(`¡Por Odín! Soy ${this.nombre},el ${this.clase}`)
    }
}

guerrero.gritoBatalla();

// Ejercicio 18
function Aldeano(nombre,profesion){
    this.nombre = nombre;
    this.profesion = profesion;
}

const nuevoAldeano = new Aldeano("Paco","Granjero");
console.log(nuevoAldeano);

// Ejercicio 19
const estadisticas = { jugadores: 1500, servidores: 3, ping: 45 };

console.log(Object.keys(estadisticas));

console.log(Object.values(estadisticas));

console.log(Object.entries(estadisticas));

console.log("================================")

// Ejercicio 20
const pergamino = {
    hechizo: "Luz Estelar",
    mana: 50
}

Object.freeze(pergamino);

//pergamino.mana = 0;

console.log(Object.isFrozen(pergamino));

// Ejercicio 21
const contrato = {
    objetivo : "Capturar al dragón",
    recompensa: 1000
}

Object.seal(contrato);

contrato.recompensa = 1500;

console.log(contrato);

// Ejercicio 22
const statsBase = { hp: 500, estamina: 100 };
const statsMagia = { mana: 300, inteligencia: 50 };

const paladin = {...statsBase, ...statsMagia};

console.log(paladin);

// Ejercicio 23
const casco = { proteccionCabeza: 20 };
const peto = { proteccionTorso: 50 };
const botas = { velocidad: 10 };

const armaduraCompleta = {...casco,...peto,...botas};

console.log(armaduraCompleta);

// Ejercicio 24
const baston = {
    elemento: "Hielo",
    poder: 85,
    lanzarHechizo:function(){
        console.log(`Lanzando un ataque de ${this.elemento} con un poder de ${this.poder}`);
    }
}

baston.lanzarHechizo();

// Ejercicio 25
const mascota = {
    nombre: "Fénix",
    raza: "Ave de Fuego",
    llamar:function(){
        console.log(`¡Ven aqui, ${this.nombre} el ${this.raza}`);
    }
}

mascota.llamar();

// Ejercicio 26
function TiendaCampamento(color,capacidad){
    this.color = color;
    this.capacidad = capacidad;
}

const tiendaRoja = new TiendaCampamento("Rojo",4);
const tiendaAzul = new TiendaCampamento("Azul",2);

console.log(tiendaRoja);
console.log(tiendaAzul);

// Ejercicio 27
function Arma(tipo,daño){
    this.tipo = tipo;
    this.daño = daño;
    this.equipada = false;
}

const nuevaArco = new Arma("Arco Largo", 45);
const nuevaHacha = new Arma("Hacha Doble",70);

console.log(nuevaArco);
console.log(nuevaHacha);

// Ejercicio 28
const bestiario = { goblin: 5, orco: 2, troll: 1 };

console.log(`Nombre de los moustros ${Object.keys(bestiario)}`);

// Ejercicio 29
const tesoro = { oro: 500, plata: 200, diamantes: 3}

console.log(Object.values(tesoro));

console.log(Object.entries(tesoro));