// -------------------------------
// Ejercicio 4: Calcular impuesto total de varios productos
// -------------------------------

// Función declarada: calcula el impuesto de un producto
function calcularImpuestoUnitario(valor, porcentaje) {
  // Fórmula: impuesto = valor * (porcentaje / 100)
  return valor * (porcentaje / 100);
}

// Función expresada: procesa varios productos
const procesarImpuestos = function() {
  // Pedimos la cantidad de productos
  const cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
  let totalImpuesto = 0; // acumulador del impuesto total

  // Ciclo para pedir cada producto
  for (let i = 0; i < cantidad; i++) {
    const valor = parseFloat(prompt(`Ingrese el valor del producto ${i + 1}:`));
    const porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto del producto ${i + 1}:`));

    // Usamos la función declarada para calcular el impuesto unitario
    const impuesto = calcularImpuestoUnitario(valor, porcentaje);

    // Acumulamos el impuesto
    totalImpuesto += impuesto;
  }

  // Retornamos el total acumulado
  return totalImpuesto;
};

export { procesarImpuestos };