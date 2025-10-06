import { argv } from "node:process";


if (argv.includes(`GET`)) {
    console.log(`Toma un dato`);
}

if (argv.includes(`POST`)) {
    console.log(`Recibimos ${argv[3]} satisfactoriamente`);
}

if (argv.includes(`PUT`)) {
    console.log(`Modificamos el item con id: ${argv[3]} satisfactoriamente`);
}

if (argv.includes(`DELETE`)) {
    console.log(`El item con el id: ${argv[3]} se eliminó con éxito`);
}