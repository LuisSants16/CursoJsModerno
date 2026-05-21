// El inventario Mágico

// Paso 1:
const codigoBase = 7734;
const idItem = `ITM-${codigoBase.toString()}`;

// Paso 2:
let nombreObjeto = "    escudo de dragón    ";
nombreObjeto = nombreObjeto.trim().toLocaleUpperCase();

// Paso 3:
const categoriaBruta = "Cat:Defensa-Nivel5";
const categoriaLimpia = categoriaBruta.slice(4,11);

// Paso 4:
let descripcion = "Un escudo forjado con escamas de pez, indestructible.";
descripcion = descripcion.replace("pez","dragón");

// Paso 5:
console.log(`
        --FICHA DE INVENTARIO--
    ID:${idItem} | Categoría:${categoriaLimpia}
    Objeto:${nombreObjeto}
    Info:${descripcion}
    `);