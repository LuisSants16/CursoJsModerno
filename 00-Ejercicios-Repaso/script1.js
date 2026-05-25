// Ejercicio 1
const productos = [
  { nombre: "Teclado", precio: 50 },
  { nombre: "Ratón", precio: 30 },
  { nombre: "Monitor", precio: 200 }
];

const nombresProductos = productos.map(function({nombre,precio}){
  const descuento = precio - (precio * 0.10);
  return `El producto ${nombre.nombre} cuesta ahora $${descuento}`
});

console.table(nombresProductos);

console.log("=============================")

// Ejercicio 2
const perfilUsuario = {
  nombre : "Luis",
  apellido: "Santos",
  rol : "Administrador"
}

Object.seal(perfilUsuario);

//perfilUsuario.años = 28;

perfilUsuario.rol = "superUsuario";

const {nombre , apellido} = perfilUsuario;

console.log((`${nombre} ${apellido}`).toUpperCase())

console.log("=============================")

// Ejercicio 3
const precioBaseString = "145.50";

const impuesto = 0.16;

let costoTotal = Math.ceil(parseFloat(precioBaseString) + (parseFloat(precioBaseString) * impuesto));

let aplicaEnvioGratis = costoTotal > 150; 

console.log(aplicaEnvioGratis)
console.log(costoTotal);

console.log("=============================")


// Ejercicio 1: El Podio Olímpico
const tiemposCrudos = ["  9.58 ", "9.69", "  9.84", " 9.89 ", "9.93 "];

// Podemos encadenar los .map() uno tras otro
const tiempoRedondeados = tiemposCrudos.map(function(time){
    return Math.floor(parseFloat(time.trim()));
  })

const [ganador, , tercero, ...perdedores] = tiempoRedondeados;

console.log(`El oro hizo ${ganador}, el bronce hizo ${tercero}. Quedaron ${perdedores.length} fuera del podio`);

console.log("=============================")

// Ejercicio 2: El Perfil del Héroe
const estadisticasBase = { 
  vida: 100, 
  magia: 50 
};

const equipamiento = { 
  armadura: "Cuero", 
  arma: { 
    nombreArma: "Espada de Hierro", 
    daño: 15 } 
};

const heroe = {
  ...estadisticasBase,
  ...equipamiento,
  atacar:(function(){
    return `¡Atacando con ${this.arma.nombreArma}`
  })
}

Object.seal(heroe);

//delete estadisticasBase.magia;
heroe.vida = 150;

const {vida , arma:{nombreArma}} = heroe;

console.log(heroe.atacar());
console.log(heroe);

console.log("=============================")

// Ejercicio 3: Auditoría del Inventario
const inventario = [
  "Laptop normal",
  "Cargador Roto",
  "Teléfono normal",
  404
];

inventario.pop()
inventario.splice(1,1)

let hayAlerta = false;

inventario.forEach(function(producto){

  // Encadenamos los métodos: primero todo a mayúsculas, luego reemplazamos la palabra
  const productoProcesado = producto.toUpperCase().replace("NORMAL", "PREMIUM");
  if (hayAlerta === false) {
    hayAlerta = !hayAlerta; // !false se convierte en true
  }

  console.log(productoProcesado);

})

console.log("Estado de la alerta!",hayAlerta)

console.log("=============================")
 // Ejercicio 4: Reclutamiento de la Tripulación Espacial

 const tripulacion = [
  "Falso_Positivo",
  "  piloto: carlos - estado: novato  ",
  "ingeniera: ana - estado: novato",
  "ERROR_DE_RED",
  "  medico: luis - estado: novato  ",
  false
];

const tripulacionOficial = []; // Aquí guardaremos a los candidatos limpios

// 1. Elimina el primero
tripulacion.shift();

// 2. Elimina el último
tripulacion.pop();

// 3. Elimina "ERROR_DE_RED" con splice
tripulacion.splice(-2,1);

// 4. Declara sistemaListo
let sistemaLista = false;

// 5 y 6. Haz el forEach asegurándote del scope
tripulacion.forEach(function(miembros){
  const miembroProcesado = miembros.trim().toUpperCase().replace("NOVATO","VETERANO");
  console.log(miembroProcesado);
  tripulacionOficial.push(miembroProcesado);

});

sistemaLista = !sistemaLista;

// 7. Modifica la variable e imprime el resultado final

console.table(tripulacion);
console.table(tripulacionOficial);

console.log("=============================")
console.log("=============================")

//¡Llegaste al Jefe Final de este nivel! 🚀

// --- DATOS DE INICIO ---

const protocolo = { nivel_seguridad: "Máximo", codigo: 999 };
const base = { ubicacion: "Búnker Subterráneo", estado: "Activo" };

const puntajeBase = " 95.4 ";
const bono = 10.2;

const archivos = [
  "INTRUSO",
  "  reporte_alpha : secreto  ",
  "  reporte_bravo : secreto  ",
  " ERROR_04 ",
  "  reporte_charlie : secreto  ",
  false
];

// --- ¡EMPIEZA TU MAGIA A PARTIR DE AQUÍ! ---

// Paso 1
const operacion = {
  ...protocolo,
  ...base,
  emitirAlerta:function(){
    return `Alerta en ${this.ubicacion}. Nivel de seguridad: ${this.nivel_seguridad}`;
  }
}

Object.freeze(protocolo);
Object.seal(operacion); // Sello aplicado

const {ubicacion} = operacion;

// Paso 2
let puntajeFinal = Math.ceil(parseFloat(puntajeBase) + bono);

const misionExitosa = puntajeFinal > 100;

// Paso 3
archivos.shift();
archivos.pop();
archivos.splice(-2,1);

// Paso 4
const archivosLimpios = archivos.map(function(archive){
  return archive.trim().toUpperCase().replace("SECRETO","DESCLASIFICADO");
})

const [archivoPrincipal, ,...archivosRestante] = archivosLimpios;

console.table(archivosLimpios);
console.log(operacion.emitirAlerta()); // Comprobando el método