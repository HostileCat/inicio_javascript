// 10. Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la suma debe devolver 0

function sumaPositivos(serie) {
    let suma = 0;
    for (let numero of serie) {
        if (numero > 0) {
            suma += numero;
        }
    }
    return suma;
}

// Ejemplo de uso
const serie1 = [1, 2, 3, -4, -5];
console.log("Suma de los números positivos:", sumaPositivos(serie1)); 

const serie2 = [-1, -2, -3, -4, -5];
console.log("Suma de los números positivos:", sumaPositivos(serie2)); 
