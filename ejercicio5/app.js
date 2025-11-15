import {
    buscarElemento
} from "./modulos/index.js";

// Pedimos la cantidad de elementos
const cantidad = parseInt(prompt("Ingrese la cantidad de elementos:"));
const lista = [];

// Pedimos cada elemento y lo guardamos en el arreglo
for (let i = 0; i < cantidad; i++) {
  const valor = prompt(`Ingrese el elemento ${i + 1}:`);
  lista.push(valor);
}

// Pedimos el elemento a buscar
const elementoBuscado = prompt("Ingrese el elemento que desea buscar:");

// Usamos la función flecha
const encontrado = buscarElemento(lista, elementoBuscado);

// Mostramos un mensaje amigable
if (encontrado) {
  console.log(`El elemento "${elementoBuscado}" SÍ existe en la lista.`);
} else {
  console.log(`El elemento "${elementoBuscado}" NO se encuentra en la lista.`);
}