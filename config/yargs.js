// const opts = {
//     descripcion: {
//         demand: true,
//         desc: 'Descripcion de la tarea por hacer',
//         alias: 'd'
//     },
//     completado: {
//         alias: 'c',
//         default: true,
//         desc: 'Actualiza el estado comletado de  la tarea por hacer'
//     }
// }
// const argv = require('yargs')
//     .command('crear', 'Crea una tarea por hacer', opts)
//     .command('actualizar', 'Actualiza el estado de una tarea', opts)
//     .command('listar', 'Lista las tarea')
//     .command('borrar', 'Borra una tarea', opts)
//     .help()
//     .argv;


const descripcion = {
    demand: true,
    desc: 'Descripcion de la tarea por hacer',
    alias: 'd'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Actualiza el estado comletado de  la tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('listar', 'Lista las tarea')
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = { argv }