// -------------------------------
// Archivo: ejercicio5.js
// Contiene la función flecha para buscar un elemento en un arreglo
// -------------------------------

// Función flecha que busca un elemento en un arreglo
const buscarElemento = (lista, elemento) => {
  // Recorremos el arreglo con un ciclo for
  for (let i = 0; i < lista.length; i++) {
    // Si el elemento en la posición i es igual al buscado
    if (lista[i] === elemento) {
      return true; // lo encontramos
    }
  }
  // Si terminamos el ciclo y no lo encontramos
  return false;
};

// Exportamos la función para usarla en app.js
export { buscarElemento };