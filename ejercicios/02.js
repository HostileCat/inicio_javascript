// 2. escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la
// contraseña introducida por el usuario coincide con la guardada en la variable sin
// tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
// ingresar valores alfanuméricos. 




while (true) {
  let contraseña = "contraseña1234";

  let contraseñaUsuario = prompt("Por favor, ingresar la contraseña. (contraseña1234)");

  let alfanumerico = /^[0-9a-zA-ZñÑ]+$/.test(contraseñaUsuario);

  if (!alfanumerico){
      console.log("La contraseña solo debe tener caracteres alfanuméricos. Por favor, intentelo nuevamente.");
  }
  else {
      contraseña = contraseña.toLowerCase();
      contraseñaUsuario= contraseñaUsuario.toLowerCase();
  
      if (contraseña === contraseñaUsuario){
          console.log("La contraseña es correcta");
          break;
      }
      else{
          console.log("La contraseña es incorrecta. Por favor, intentelo nuevamente.");
      }
  }
}