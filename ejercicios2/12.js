// 12. Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

function inversoAditivo(numeros) {
    let inversos = [];
    
    for (let num of numeros) {
        if (num > 0) {
            inversos.push(-num);
        }
        else if (num < 0) {
            inversos.push(-num);
        }
        else {
            inversos.push(num);
        }
    }
    
    return inversos;
}

const numeros = [1, -2, 3, 0, -4];
const inversos = inversoAditivo(numeros);
console.log("Inversos aditivos:", inversos); 
