
//Módulo 1: El Núcleo del Sindicato (Objetos, Seguridad y this)
const sindicato = {
    nombre: "Neon Shadows",
    creditos: 50000,
    boveda:{
        clave: "X-99",
        fondosOcultos: 10000
    },
    operativos : [],

    reclutar:function(nuevoAgente){
        this.operativos.push(nuevoAgente)
    },

    generarReporte:function(){
        return this.operativos.map(function(agente){
            return `Agente: ${agente.alias} | Nivel: ${agente.nivel} | Estado: ${agente.vivo}`
        });
    }
};

Object.freeze(sindicato.boveda);

//Módulo 2: Reclutamiento y Descontaminación (Strings y Math)
let aliasCrudo = "   _gH0sT_w4lk3r_   ";
let poderCrudo = "  899.75_puntos  ";

let aliasLimpio = aliasCrudo.trim().toUpperCase().replaceAll("_"," ");
let nivelCalculado = Math.floor(Math.sqrt(parseFloat(poderCrudo.trim())))

const recluta1 = {
    alias : aliasLimpio,
    nivel : nivelCalculado,
    vivo : true
}

const recluta2 = {
    alias : "VIPER",
    nivel : 40,
    vivo : true
}

sindicato.reclutar(recluta1);
sindicato.reclutar(recluta2);

//Módulo 3: La Armería (Arreglos Clásicos y Destructuring)
const armeria = ["Pistola Láser", "Rifle PEM", "Granada", "Dron Médico", "Escudo"];
armeria.splice(1,1);

const [armaPrincipal, , apoyoTactico,...reservas] = armeria;

//Módulo 4: Despliegue de Misión (Spread Operator y forEach)
const externos = [{alias: "Kira", nivel: 50, vivo: true}];

const fuerzaDeAsalto = [...sindicato.operativos, ...externos];
    
fuerzaDeAsalto.forEach(function(agente){
    agente.nivel -= 5;
    if (agente.nivel < 10){
        agente.vivo = false
    }
    console.log(`El agente ${agente.alias} reporta estado de vida: ${agente.vivo}`);
})

//Módulo 5: Extracción Final (Destructuring de Objetos y Reportes)
const {nombre , creditos} = sindicato;

console.log(`Operacion finalizada por la corporacion ${nombre}. Fondos intactos: ${creditos}`);

const reporteFinal = sindicato.generarReporte();

console.table(reporteFinal);