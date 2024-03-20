// 1. Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.

function obtenerMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2; 
    }
}

const numeroMayor = obtenerMayor(5, 10);
console.log(`El número mayor es: ${numeroMayor}`); 