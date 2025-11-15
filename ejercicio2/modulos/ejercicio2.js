// -------------------------------
// Ejercicio 2: Sistema de autenticación básico
// -------------------------------

// Función expresada que valida el acceso
const validarAcceso = function(edad, contrasena) {
  const contrasenaValida = "12345"; // contraseña definida por la empresa

  // Usamos operadores lógicos:
  // 1. edad >= 18 (mayor de edad)
  // 2. contrasena === contrasenaValida (comparación estricta)
  if (edad >= 18 && contrasena === contrasenaValida) {
    return "Acceso concedido: Bienvenido al sistema.";
  } else {
    return "Acceso denegado: Verifique su edad o contraseña.";
  }
};

export { validarAcceso };