
// La Interceptación del Objetivo (Limpieza y Cálculos)
let textoConEspacio = "   banco CEntral Incriptado   ";
let textoLimpio = textoConEspacio.trim().toUpperCase().replace("INCRIPTADO","VULNERADO");

const precioFalso = "50800.50usd";
const precioReal = Math.floor(parseFloat(precioFalso) + Math.pow(10,3));

// El Arma Cibernética (Constructores y Contexto)

function Malware(nombre,poder){
    this.nombre = nombre;
    this.poder = poder;
    this.ejecutar = function(){
        console.log(`Inyectando el virus ${this.nombre} con nivel de poder ${this.poder}`);
    }
}

const Malware2 = new Malware("Troyano X",999);

// Infiltración y Manipulación (Anidamiento, Mutabilidad y Seguridad)
const boveda = {
    propietario : "OmniCorp",
    seguridad : {
        firewall : "Activo",
        rastreo : true
    },
    fondos :{
        disponibles : 50000,
        bloqueados : false
    }
}

const {seguridad} = boveda;
Object.freeze(seguridad)

const {fondos} = boveda;
Object.seal(fondos)

//boveda.seguridad.firewall("Desactivado"); <-- Da error por esta congelado

boveda.fondos.disponibles = 0
delete boveda.propietario;

//Extracción y Lavado de Datos (Destructuring y Spread)
const {seguridad:{rastreo},fondos:{disponibles}} = boveda;

const cuentaFantasma = {
    banco : "Islas Caimán",
    saldoOculto : 0
}

const lavadoFinal = {...cuentaFantasma, ...Malware2,botinExtraido:precioReal}

//El Escape (Booleanos, Ternarios e Inspección)

let elEscape = disponibles === 0;

console.log( elEscape ? "Hackeo exitoso: Sin fondos en la bóveda" : "Abortar misión : Fondos atascados");
