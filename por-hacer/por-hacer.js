const fs = require('fs');

let listadoPorHacer = []; //definimos un arreglo

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Error al crear la tarea ', err);
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };
    cargarDB();
    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer
}


const getlistado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, estado) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = estado;

        guardarDB();
        return true;
    } else { return false }
}

const borrar = (descripcion) => {

    cargarDB();

    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    // if (index >= 0) {
    //     listadoPorHacer.splice(index, 1);
    //     guardarDB();
    //     return true;
    // } else { return false }
    // otra manera
    let nuevolistado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (listadoPorHacer.length === nuevolistado.length) {
        return false;
    } else {
        listadoPorHacer = nuevolistado;
        guardarDB();
        return true;
    }

}



module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}