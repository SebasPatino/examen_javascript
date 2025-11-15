import { 
    calcularPromedio
} from "./modulos/index.js";

// -------------------------------
// Archivo: app.js
// Aquí conectamos la lógica del ejercicio y ejecutamos el programa
// -------------------------------

// Pedimos la cantidad de notas
const cantidad = parseInt(prompt("Ingrese la cantidad de notas:"));
const notas = [];

// Pedimos cada nota
for (let i = 0; i < cantidad; i++) {
  let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
  notas.push(nota);
}

// Usamos la función calcularPromedio definida en ejercicio1.js
const resultado = calcularPromedio(notas);

// Mostramos resultados en consola
console.log("\n--- Resultados ---");
console.log(`Promedio final: ${resultado.promedio}`);
console.log(`Categoría de rendimiento: ${resultado.rendimiento}`);