const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"];

console.table(meses);
console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);
console.log(meses[3]);

// Cuanto mide el arreglo
console.log(meses.length);

// Como recorrer un arreglo - con for(empezando ver al for)
for(let i = 0; i < meses.length ; i++){
    console.log(meses[i]);
}