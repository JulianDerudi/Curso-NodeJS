import { argv } from "node:process";


// if (argv.includes(`GET`)) {
// console.log(`Toma un dato`);
// }
// 
// if (argv.includes(`POST`)) {
// console.log(`Recibimos ${argv[3]} satisfactoriamente`);
// }
// 
// if (argv.includes(`PUT`)) {
// console.log(`Modificamos el item con id: ${argv[3]} satisfactoriamente`);
// }
// 
// if (argv.includes(`DELETE`)) {
// console.log(`El item con el id: ${argv[3]} se eliminó con éxito`);
// }


// Usamos la API pública de Rick and Morty
const url = "https://rickandmortyapi.com/api/character";

fetch(url)
  .then(response => {
    if (!response.ok) throw new Error("Error en la petición");
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then(data => {
    // Obtenemos los primeros 5 personajes del array results
    const primerosCinco = data.results.slice(0, 5);
    console.log("Primeros 5 personajes:", primerosCinco);
  })
  .catch(error => {
    console.error("Hubo un error:", error.message);
  })
  .finally(() => {
    console.log("Petición finalizada ✅");
  });


// async function obtenerPersonajes() {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("Error en la petición");
// 
//     const data = await response.json();
//     const primerosCinco = data.results.slice(0, 5);
// 
//     console.log("Primeros 5 personajes:", primerosCinco);
//   } catch (error) {
//     console.error("Hubo un error:", error.message);
//   } finally {
//     console.log("Petición finalizada ✅");
//   }
// }
// 
// obtenerPersonajes();