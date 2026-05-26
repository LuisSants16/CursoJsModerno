// 📝 PROYECTO: GESTOR DE TAREAS V1.0

const misTareas = [
     {id : 101010 , titulo : "Hacer ejercicios" , completada : false},
     {id : 202020 , titulo : "Pasear a mi perro" , completada : false},
     {id : 303030 , titulo : "Estudiar" , completada : false}
];

let IDcontador = 404040;

const gestor = {
    propied: "Luis Santos",
    lista: misTareas,
    agregar:function(nuevoTitulo){
        this.lista.push({
            id: IDcontador,
            titulo: nuevoTitulo,
            completada: false
        })
        IDcontador += 101010;
    },
    marcarCompletada:function(idBuscado){
        this.lista.forEach(function(tarea){
            if(idBuscado === tarea.id){
                tarea.completada = true;
            }
        })
    },
    verPendientes:function(){
        this.lista.forEach(function(tarea){
            if(!tarea.completada){
                console.log(`${tarea.titulo} - Estado: ${tarea.completada}`)
            }   
        })
    },
    resumenDiario:function(){
        tareaResumen = this.lista.map(function(tarea){
            return `${tarea.titulo} - Estado: ${tarea.completada}`
        });

        return tareaResumen;
    }
}

console.log(`Bienvenido al gestor, ${gestor.propied}`);
gestor.agregar("Leer libro");
gestor.agregar("Limpiar cuarto");
gestor.marcarCompletada(202020);
console.log("");
console.log("------- TAREAS PENDIENTES -------");
gestor.verPendientes();

const reporteFinal = gestor.resumenDiario();
console.log(reporteFinal);


































// //Módulo 1: La Base de Datos Inicial
// const misTareas = [
//     {id : 101010 , titulo : "Hacer ejercicios" , completada : false},
//     {id : 202020 , titulo : "Pasear a mi perro" , completada : false},
//     {id : 303030 , titulo : "Estudiar" , completada : false}
// ];

// let contadorID = 404040;

// //Módulo 2: El Cerebro del Sistema (Objeto Gestor)
// const gestor = {
//     propiedad : "Luis Santos",
//     lista : misTareas,
//     agregar: function(nuevoTitulo){
//        this.lista.push({
//         id: contadorID,
//         titulo: nuevoTitulo,
//         completada: false
//        });
//         contadorID += 101010;
//     },
//     marcarCompletado: function(idBuscado){
//         this.lista.forEach(function(tarea){
//             if (idBuscado === tarea.id){
//                 tarea.completada = true;
//             }
//         });
//     },
//     verPendientes:function(){
//         this.lista.forEach(function(tarea){
//             if (!tarea.completada){
//                 console.log(`Pendiente: ${tarea.titulo}`)
//             }
//         });
//     },
//     resumenDiario:function(){
//         const tareasEstado = this.lista.map(function(tarea){
//             return `${tarea.titulo} - Estado: ${tarea.completada}`;
//         })

//         return tareasEstado;
//     }
// }

// //console.log(gestor);

// console.log(`Bienvenido al gestor, ${gestor.propiedad} `);
// gestor.agregar("Comprar Libro");
// gestor.agregar("Ordenar cuarto");
// gestor.marcarCompletado(202020);
// gestor.verPendientes();

// const reporteFinal = gestor.resumenDiario();

// console.table(reporteFinal);