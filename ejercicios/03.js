// 3. Escribir un programa que pida al usuario dos números y muestre por pantalla su
// división, si el divisor es cero el programa debe mostrar un error, se debe manejar
// mediante excepciones y el mensaje debe ser personalizado.

function division() {

  let dividendo = parseFloat(prompt("Ingrese el dividendo:"));
  let divisor = parseFloat(prompt("Ingrese el divisor:"));

  try {
      if (divisor === 0) {
          throw "Error: El divisor no puede ser cero.";
      }

      let resultado = dividendo / divisor;
      console.log("El resultado de la división es: " + resultado);
  } catch (error) {

      console.log(error);
  }
}

division();