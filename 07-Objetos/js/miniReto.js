// Paso 1:
const catalogoBase = {
    empresa : "Panamerican Trading",
    equipos : {
        lavadoras : {
            modelo : "LWN311",
            stock : 20
        },
        secadoras : {
            modelo : "LDLE31",
            stock : 10
        }
    }
}

Object.freeze(catalogoBase);

// Paso 2:
function Implantes(modelo,precio){
    this.modelo = modelo;
    this.precio = precio;
    this.escaner = function(){
        console.log(`El modelo es: ${this.modelo} con un precio de ${this.precio}`);
    }
}

const brazoMecanico = new Implantes("UT075LRQ", 7500);

// Paso 3
brazoMecanico["numero de serie"] = "A156574";
delete brazoMecanico.precio;

Object.seal(brazoMecanico);

brazoMecanico.modelo = "UWL085TW";

//console.log(brazoMecanico);

// Paso 4
const extras = {
    color : "gris",
    material : "Acero galvanizado",
    añoFabricacion : 2025
}

const productoFinal = {...brazoMecanico, ...extras};

//console.log(productoFinal);

// Paso 5

console.log(productoFinal["numero de serie"]);

const {empresa,equipos:{lavadoras:{modelo}}} = catalogoBase;

console.log(empresa)
console.log(modelo);

// Paso 6

/*Genera el reporte 1: Imprime en consola únicamente los nombres de todas las propiedades del producto.
*/

console.log(Object.keys(productoFinal));


/*
Genera el reporte 2: Imprime en consola únicamente los datos/valores almacenados en el producto.
*/

console.log(Object.values(productoFinal));

/*
Genera el reporte 3: Imprime en consola la estructura completa en formato de pares del producto.*/

console.log(Object.entries(productoFinal));