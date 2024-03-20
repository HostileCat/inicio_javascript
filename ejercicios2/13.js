// 13. Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este numero es par o impar.

function verificarParImpar() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    if (numeroAleatorio % 2 === 0) {
        return `El número ${numeroAleatorio} es par.`;
    } else {
        return `El número ${numeroAleatorio} es impar.`;
    }
}

console.log(verificarParImpar());

