const fs= require ('fs');
let archivoTareas = {
    archivo : 'Tareas.json',
    leerArchivo : function (){
        let tareasJSON = fs.readFileSync ('./tareas.json', 'utf-8');
        let tareas = JSON.parse(tareasJSON);
        return tareas;
    },
    escribirJSON : function (arrayNuevaTarea){
        let tareas = this.leerArchivo(); 
        tareas.push (arrayNuevaTarea);                  
        return JSON.stringify(tareas);        
        },
    guardartarea : function (arrayNuevaTarea){
            fs.writeFileSync ('./tareas.json', this.escribirJSON(arrayNuevaTarea), 'utf-8');
        },
    filtrarPorEstado : function (estado){
        let tareas = this.leerArchivo();        
        let tareasFiltradas = tareas.filter (function(elemento){
        return elemento.estado === estado;
        });
         //console.log (tareasFiltradas);
        return tareasFiltradas;
    }

}
// let nuevoTarea = {titulo: 'enviar correo', estado: 'pendiente'} ;
// archivoTareas.guardartarea (nuevoTarea);

module.exports = archivoTareas;
