// -------------------------------
// Ejercicio 4: Calcular impuesto total de varios productos
// -------------------------------

// Función declarada: calcula el impuesto de un producto
function calcularImpuestoUnitario(valor, porcentaje) {
  // Fórmula: impuesto = valor * (porcentaje / 100)
  return valor * (porcentaje / 100);
}

// Función expresada que procesa varios productos
const procesarImpuestos = function(cantidad, valores, porcentajes) {
  let totalImpuesto = 0; // acumulador

  // Ciclo para recorrer todos los productos
  for (let i = 0; i < cantidad; i++) {
    const impuesto = calcularImpuestoUnitario(valores[i], porcentajes[i]);
    totalImpuesto += impuesto; // acumulamos
  }

  // Retornamos el total
  return totalImpuesto;
};

export { procesarImpuestos };