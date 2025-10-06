/*   CLASE 2   */
/*
console.log("Hola desde Node JS");
console.log(" "); console.log(" "); console.log(" ");
*/





/*   CLASE 3   */
/*
// 1) Creamos un array con 10 precios
const precios = [100, 250, 320, 50, 600, 1200, 75, 430, 890, 150];

// 2) Calculamos el precio con IVA (21%) usando map()
const preciosConIVA = precios.map(precio => {
  return precio * 1.21; // suma el 21%
});

// 3) Mostramos los resultados
function mostrarResultados(array) {
    array.forEach(element => {
        console.log(`El precio es: ${element}.- IVA incluido`);
    });
}

mostrarResultados(preciosConIVA);
console.log(" "); console.log(" "); console.log(" ");
*/





/*   CLASE 4   */
/*
// Mision 1:
// 1)
class Automovil {
  constructor(marca, modelo, año, color){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
  }
}

const auto1 = new Automovil('marca1', 'modelo1', 2002, 'Azul');
const auto2 = new Automovil('marca2', 'modelo1', 2012, 'Rojo');
const auto3 = new Automovil('marca1', 'modelo2', 2005, 'Azul');
const auto4 = new Automovil('marca1', 'modelo1', 2008, 'Gris');
const auto5 = new Automovil('marca3', 'modelo4', 2009, 'Azul');
const auto6 = new Automovil('marca2', 'modelo2', 2015, 'Gris');
const auto7 = new Automovil('marca1', 'modelo3', 2023, 'Rojo');
const auto8 = new Automovil('marca3', 'modelo1', 2022, 'Azul');
const auto9 = new Automovil('marca3', 'modelo2', 2012, 'Rojo');
const auto10 = new Automovil('marca1', 'modelo3', 2018, 'Azul');

const autos = [auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9, auto10];

// 2)
function autosMayoresA2018(autos) {
  autos.forEach(auto => {
        if(auto.año > 2018){
          console.log(auto);
        }
    });
}

autosMayoresA2018(autos); console.log('');


// Mision 2:
// 1)
function cantidadDeAutosDeColor(autos, color) {
  count = 0;
  autos.forEach(auto => {
    if(auto.color === color){
      count++;
    }
  });
  return count;
}

console.log(`Cantidad de autos de color Azul: ${cantidadDeAutosDeColor(autos, 'Azul')} `);
*/





/*   CLASE 5   */
/*
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
*/





/*   CLASE 6   */
fetch("https://fakestoreapi.com/products")
  .then((res) => {res});