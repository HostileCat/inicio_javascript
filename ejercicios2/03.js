// 3. Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
//     cortas menores de 5 caracteres).

function longitudPalabra(palabra) {
    if (palabra.length < 5) {
        return "La palabra es corta";
    } else {
        return "La palabra es larga";
    }
}

console.log(longitudPalabra("casa")); 
console.log(longitudPalabra("computadora")); 
