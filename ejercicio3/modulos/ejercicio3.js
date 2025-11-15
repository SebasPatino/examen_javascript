// -------------------------------
// Ejercicio 3: Tabla de multiplicar
// -------------------------------

// Función flecha que genera la tabla de multiplicar
const generarTabla = (numero) => {
  const resultados = []; // arreglo vacío para guardar los resultados

  // Ciclo for del 1 al 10
  for (let i = 1; i <= 10; i++) {
    resultados.push(numero * i); // multiplicamos y guardamos en el arreglo
  }

  // Retornamos el arreglo con los resultados
  return resultados;
};

//exportamos la función para usarla en otros módulos
export { generarTabla };