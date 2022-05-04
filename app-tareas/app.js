//         MICRO DESAFIO 1
// 1. Generar un archivo app.js que "consuma" el archivo de tareas.json. Para esto,

// const fs = require ('fs');

// // 2. Mostrar el listado de tareas existente por la terminal.

// // let tareasJSON = fs.readFileSync ('./tareas.json', 'utf-8');
// // let tareas =JSON.parse(tareasJSON) ;
// //  console.log(tareas);
const { fstat } = require('fs');
const { leerArchivo } = require('./funcionesDeTareas');
const archivo = require ('./funcionesDeTareas');
let tareas = archivo.leerArchivo();
// console.log (tareas);
//         MICRO DESAFIO 2
// Permitir que al momento de ejecutar el archivo app.js desde la terminal con
// Node.js se pueda pasar un argumento después del nombre del archivo de la

// 1.a Si se escribe 'listar' se debera listar todas las tareas.

let accion = process.argv [2];
switch (accion){
    case 'listar':
        // console.log('\n       LISTA DE TAREAS ');
        // console.log ('\n----------------------------------\n');    
        // for (let i=0; i<tareas.length; i++){
        //     console.log (i+1 +'. '+ tareas[i].titulo + ' - ' + tareas[i].estado);
        // }console.log('\n----------------------------------\n')
        console.log('\n       LISTA DE TAREAS ');
        console.log ('\n----------------------------------\n');
        tareas.forEach (function(tarea, index){
            console.log (index+1 +'. '+ tarea.titulo + ' - ' + tarea.estado);
        });
        console.log ('\n----------------------------------\n');
    break;
    case 'crear':
        let nuevaTarea = {
            titulo : process.argv [3] +' '+ process.argv [4],
            estado : 'Pendiente'
        }
        archivo.guardartarea (nuevaTarea);
        break;
    case 'filtrar':
        let estado = process.argv [3];
        let tareasFiltradas = archivo.filtrarPorEstado(estado);
        // console.log (tareasFiltradas);
        console.log('\n       LISTA DE TAREAS EN ESTADO '+ estado);
        console.log ('\n----------------------------------\n');
        tareasFiltradas.forEach (function(tareasFiltradas, index){
            console.log (index+1 +'. '+ tareasFiltradas.titulo + ' - ' + tareasFiltradas.estado);
        });
        console.log ('\n----------------------------------\n');

        break;

    case undefined:
        console.log ('\n----------------------------------\n');
        console.log('Atención - Tienes que pasar una acción.\nLas acciones disponibles son: listar');
        console.log ('\n----------------------------------\n');
        break;
    default:
        console.log ('\n----------------------------------\n');
        console.log ('No entiendo qué quieres hacer.\nLas acciones disponibles son: listar');
        console.log ('\n----------------------------------\n');
}
// 1. Modificar la funcionalidad de listar tareas. Deberemos utilizar el método forEach
