// 9. Escribir un programa para una empresa que tiene salas de juegos para todas las
// edades y quiere calcular de forma automática el precio que debe cobrar a sus
// clientes por entrar. El programa debe preguntar al usuario la edad del cliente y
// mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar
// gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€.

let precioEntrada;

let edad;

while (true) {
  edad = parseInt(prompt("Por favor, ingrese su edad:"));
  if (edad < 4 && edad >= 0) {
    precioEntrada = 0; 
  } else if (edad >= 4 && edad < 18) {
    precioEntrada = 5; 
  } else if (edad >= 18){
    precioEntrada = 10;
  }else {
    console.log("Debe ingresar un numero positivo");
    continue
  }
  break
}

console.log("El precio de la entrada es: " + precioEntrada + "€");