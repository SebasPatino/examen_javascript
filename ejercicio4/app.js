import {
    procesarImpuestos
} from "./modulos/index.js";

// Pedimos la cantidad de productos
const cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
const valores = [];
const porcentajes = [];

// Pedimos valor y porcentaje de cada producto
for (let i = 0; i < cantidad; i++) {
  const valor = parseFloat(prompt(`Ingrese el valor del producto ${i + 1}:`));
  const porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto del producto ${i + 1}:`));
  valores.push(valor);
  porcentajes.push(porcentaje);
}

// Usamos la función procesarImpuestos
const total = procesarImpuestos(cantidad, valores, porcentajes);

// Mostramos resultados
console.log("\n--- Resultados ---");
console.log(`Impuesto total acumulado: ${total}`);