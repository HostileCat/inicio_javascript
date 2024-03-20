// 9. Genera un patrón de asteriscos en forma de pirámide.

function piramide(niveles) {
    for (let i = 1; i <= niveles; i++) {
        let fila = '';
        for (let j = 1; j <= niveles - i; j++) {
            fila += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            fila += '*';
        }
        console.log(fila);
    }
}

piramide(4);
