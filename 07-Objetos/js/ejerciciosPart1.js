// Fase 1

// Ejercicio 1
const avatar = {
    nombre: "Arthur",
    nivel: 10,
    vivo: true
}

// Ejercicio 2
console.log(avatar.nombre);
console.log(avatar["nivel"]);

// Ejercicio 3
avatar.arma = "Espada de fuego";

console.log(avatar)

// Ejercicio 4

delete avatar.vivo;

console.log("================================")

// Fase 2

// Ejercicio 5
const {nombre,arma} = avatar;

console.log(nombre);
console.log(arma);

// Ejercicio 6
const mochila = {
    capacidad : 50,
    bolsilloMagico:{
        oro : 500,
        pociones : 3
    }
}

// Ejercicio 7
const {bolsilloMagico:{oro}} = mochila;
console.log(oro);

// Ejercicio 8
const jefeFinal = {
    nombre: "Dragón Oscuro",
    hp: 5000,
    estado: "Dormido",
    ubicacion: {
        mundo: "Mundo Subterráneo",
        coordenadas: {
            x: 150,
            y: 300
        }
    }
}

delete jefeFinal.estado;
jefeFinal.ataqueEspecial = "Aliento de Fuego";

const {ubicacion:{coordenadas:{y}}} = jefeFinal;

console.log(y);

console.log("================================")

// Ejercicio 9
const factura = {
    monto : 150,
    "tipo de moneda" : "oro"
}

console.log(factura["tipo de moneda"]);

// Ejercicio 10
const tienda = { nombre: "Bazar de Magia", pociones: 10, pergaminos: 5 };

tienda.cristales = 20;
tienda.reliquias = 2;
delete tienda.pergaminos;

console.log(tienda);

// Ejercicio 11
const mapa = {
    region : "Bosque Oscuro",
    pistas : {
        norte : "Árbol gigante",
        sur : "Cueva oculta"
    }
}

// Ejercicio 12
const {region,pistas:{sur}} = mapa;
console.log(region)
console.log(sur);

// Ejercicio 13
const expediente = {
    id: 404,
    datos: {
        rango: "Plata",
        misiones: {
            completadas: 15,
            fallidas: 2
        }
    }
}

const {datos:{misiones:{completadas}}} = expediente;
console.log(completadas);

expediente.totalVictorias = completadas;

delete expediente.datos.misiones;

console.log(expediente);