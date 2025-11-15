// -------------------------------
// Archivo: ejercicio1.js
// Aquí van las funciones del ejercicio
// -------------------------------

// Función que evalúa el rendimiento según el promedio
function evaluarRendimiento(promedio) {
  if (promedio >= 4.0) {
    return "Alto";
  } else if (promedio >= 3.0) {
    return "Medio";
  } else {
    return "Bajo";
  }
}

// Función que calcula el promedio de un arreglo de notas
function calcularPromedio(notas) {
  let suma = 0;

  // Recorremos el arreglo con un ciclo
  for (let nota of notas) {
    suma += nota;
  }

  // Calculamos el promedio
  let promedio = suma / notas.length;

  // Evaluamos el rendimiento
  let rendimiento = evaluarRendimiento(promedio);

  // Retornamos ambos resultados
  return { promedio, rendimiento };
}
// Exportamos las funciones para que puedan ser usadas en otros módulos
export { evaluarRendimiento, calcularPromedio };