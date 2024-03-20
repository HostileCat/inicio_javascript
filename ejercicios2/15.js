// 15. Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.

function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '');
}

console.log(eliminarVocales("Hola mundo")); 
console.log(eliminarVocales("JavaScript")); 
