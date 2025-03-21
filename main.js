const contraseñaCorrecta = "seguro123";

let edad = parseInt(prompt("Ingresa tu edad:"));
let contrasena = prompt("Ingresa la contraseña:");

 if (edad > 18 && contrasena === contraseñaCorrecta) {
     console.log("Acceso concedido");
 } else {
     console.log("Acceso denegado, verifica tu edad o contraseña.");
 }