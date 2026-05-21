// Módulo 1: Laboratorio de Genética (Strings y Math)

let textoSucio = "   aDn de vEloCiraPtor recuperado   ";
let textoLimpio = textoSucio.trim().toUpperCase().replace("RECUPERADO","SECUENCIADO");

let presupuesto = "15800.99usd";
presupuesto = Math.ceil(parseFloat(presupuesto) + Math.pow(10, 2));

// Módulo 2: El Espécimen (Object Literal Moderno y Contexto)

const tRex = {
    especie : "T-Rex",
    peso : 6000,
    hambriento : true,
    rugir:function(){
        this.hambriento = !this.hambriento;
        console.log(this.hambriento ? `!ROAAAR¡ Soy un ${this.especie} y tengo hambre` : `GRRR... Soy un ${this.especie} de ${this.peso}Kg. y estoy satisfecho`);
    }
}

//tRex.rugir();
//tRex.rugir();

// Módulo 3: El Recinto (Objetos Anidados, Mutabilidad y Seguridad)

const recintoBase = {
    secto : "Norte",
    seguridad : {
        cercadoElectrico : true,
        voltaje : 1000
    },
    estado :{
        luces : "Encendidas"  
    }
}

Object.freeze(recintoBase.seguridad);
Object.seal(recintoBase.estado);

//recintoBase.seguridad.voltaje = 0;
recintoBase.estado.luces = "Apagadas";

recintoBase.capacidadMax = 5;

delete recintoBase.secto;


// Módulo 4: Apertura del Parque (Destructuring y Spread Operator)

const {seguridad:{voltaje},estado:{luces}} = recintoBase;

console.log(voltaje);
console.log(luces);

const condiciones = {
    clima : "Soleado",
    visitante : 1500
}

const parqueActualizado = {...recintoBase , ...condiciones,dinosaurioPrincipal : tRex};

// Módulo 5: Protocolo de Emergencia (Booleanos e Inspección)

let pruebaLogica = voltaje !== 1000;

console.log(pruebaLogica ? "¡ALERTA ROJA! Falla eléctrica detectada" : "Sistemas en verde. Bienvenidos al parque.");

console.log(Object.keys(parqueActualizado));
console.log(Object.values(parqueActualizado));
console.log(Object.entries(parqueActualizado));