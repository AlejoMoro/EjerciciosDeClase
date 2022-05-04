const fs = require ('fs');
let escribirTareas = {
        arcchivo: 'Tareas.json',
        escribirJSON : function (array){
        let json = JSON.stringify(array);
        fs.writeFileSync ('./tareas.json');
        },
        guardarTarea: function (tarea){
        let info = leerArchivo();
        info.push (tarea);
        escribirJSON(info);
    }
    }

    module.exports = escribirTareas;