// 11. Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

function sumaBinaria(num1, num2) {
    let suma = (num1 + num2).toString(2);
    return suma;
}

const numero1 = 15;
const numero2 = 12;
const resultadoBinario = sumaBinaria(numero1, numero2);
console.log("La suma en binario es:", resultadoBinario);
