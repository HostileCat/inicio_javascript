// 6. Crea una función de nos devuelva el elemento mayor de un arreglo de números.

function encontrarMayor(arreglo) {
    let mayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i]; 
        }
    }

    return mayor; 
}

const numeros = [10, 5, 20, 8, 15];
console.log(`El mayor elemento del arreglo es: ${encontrarMayor(numeros)}`);
