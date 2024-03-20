// 7. Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.

function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

const cadenaOriginal = 'construccion';
console.log(`Cadena original: ${cadenaOriginal}`);
console.log(`Cadena invertida: ${invertirCadena(cadenaOriginal)}`);
