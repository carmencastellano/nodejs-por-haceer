// const argv = require('yargs').argv;


const colors = require('colors');
const argv = require('./config/yargs').argv;
// const { crear } = require('./por-hacer/por-hacer')

const porhacer = require('./por-hacer/por-hacer')

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);

        break;
    case 'listar':

        let listado = porhacer.getlistado();
        for (let tarea of listado) {
            console.log('=====================Tarea============'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================================'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(`Tarea ${argv.descripcion} - ${actualizado}`);
        break;

    case 'borrar':
        let borrado = porhacer.borrar(argv.descripcion);

        console.log(`Tarea ${argv.descripcion} - ${borrado}`);
        break;
    default:
        console.log('CoOmando no reconocido');
}