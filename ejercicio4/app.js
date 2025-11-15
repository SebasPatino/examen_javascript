import {
    procesarImpuestos
} from "./modulos/index.js";

// -------------------------------
// Ejecución del programa
// -------------------------------
const total = procesarImpuestos();
console.log("\n--- Resultados ---");
console.log(`Impuesto total acumulado: ${total}`);