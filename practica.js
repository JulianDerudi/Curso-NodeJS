/*   CLASE 2   */
console.log("Hola desde Node JS");
console.log(" "); console.log(" "); console.log(" ");



/*   CLASE 3   */
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

