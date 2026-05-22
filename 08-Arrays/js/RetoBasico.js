//🕶️ OPERACIÓN: NEÓN (Reto Integrador Desordenado)

// Fase 1: El Cortafuegos (Números y Math)

let resistenciaBruta = "999.99terabytes";
resistenciaBruta = Math.floor(Math.sqrt(parseFloat(resistenciaBruta)));

// Fase 2: Intercepción de Paquetes (Strings)
let claveCruda = "   aCcEsO_dEnEgAdO   ";
claveCruda = claveCruda.trim().toLowerCase().replace("DENEGADO", "CONCEDIDO");

// Fase 3: Arsenal de Infiltración (Arrays Clásicos)
const arsenal = ["Malware","Phishing"];
arsenal.unshift("Fuerza Bruta");
arsenal.push("Troyano");

arsenal.shift();

// Fase 4: El Perfil del Infiltrador (Objetos y Contexto)

const hacker = {
    alias: "LuisSants",
    creditos: 5000,
    rastreo: false,
    ocultarRastro:function(){
        this.creditos -= 500;
        this.rastreo = !this.rastreo;
        console.log(`${this.alias} ha borrada sus huellas. Créditos restantes: ${this.creditos}`);
    }
}

hacker.ocultarRastro();
hacker.ocultarRastro();

// Fase 5: Extracción de Datos (Destructuring y map)
const cuentas = [
    { id: 1, banco: "Megacorp", fondos: 1000 },
    { id: 2, banco: "NeoBank", fondos: 5000 },
    { id: 3, banco: "CyberCredit", fondos: 8000 }
];

const [cuentaPrincipal] = cuentas;

const listaBancos = cuentas.map(function(bank){
        return bank.banco;
})

console.log(listaBancos);