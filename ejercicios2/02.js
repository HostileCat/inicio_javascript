// 2. Crea una función que tome un número como argumento y devuelva la cadena si el
// numero es par o impar.

function parOImpar(numero) {
    if (numero % 2 === 0) {
        return `${numero} es par`; 
    } else {
        return `${numero} es impar`;
    }
}

const resultado1 = parOImpar(10);
console.log(resultado1);

const resultado2 = parOImpar(7);
console.log(resultado2); 

