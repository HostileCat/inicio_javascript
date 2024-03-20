// 4. Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.

function calcularSilabas(palabra) {
    palabra = palabra.toLowerCase();
    
    const normal = /[aeiouáéíóú]/gi;
    const diptongo = /[aeo][iu]|[iu][aeiouáéíóú]/gi;
    

    const coincidenciasn = palabra.match(normal);
    
    const coincidenciasd = palabra.match(diptongo);

    let coincidencias;
    if (coincidenciasd === null){
        coincidencias = coincidenciasn.length;
    } else{
        coincidencias = coincidenciasn.length - coincidenciasd.length ;
    }
    return coincidencias;
}

const palabra1 = prompt();


console.log(`La palabra "${palabra1}" tiene ${calcularSilabas(palabra1)} sílabas.`);



