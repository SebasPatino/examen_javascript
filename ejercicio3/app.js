import {
    generarTabla
} from "./modulos/index.js";

// -------------------------------
// Ejecución del programa
// -------------------------------

// Pedimos el número base al usuario
const numeroBase = parseInt(prompt("Ingrese el número base de la tabla:"));

// Llamamos a la función flecha
const tabla = generarTabla(numeroBase);

// Mostramos resultados en consola
console.log(`Tabla de multiplicar del ${numeroBase}:`);
console.log(tabla);