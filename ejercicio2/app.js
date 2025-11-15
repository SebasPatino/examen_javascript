import { 
    validarAcceso
} from "./modulos/index.js";

// -------------------------------
// Ejecución del programa
// -------------------------------

// Pedimos datos al usuario con prompt()
const edadUsuario = parseInt(prompt("Ingrese su edad:"));
const contrasenaUsuario = prompt("Ingrese su contraseña:");

// Llamamos a la función y guardamos el resultado
const mensaje = validarAcceso(edadUsuario, contrasenaUsuario);

// Mostramos el mensaje en consola
console.log(mensaje);