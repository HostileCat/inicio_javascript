// 8. Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es valido y false si no es válido.

function validarPin(pin) {
    const regex = /^[0-9]{4}$|^[0-9]{6}$/;
    return regex.test(pin); 
}

console.log(validarPin("1234")); 
console.log(validarPin("123456")); 
console.log(validarPin("12345")); 
console.log(validarPin("abcd")); 
 