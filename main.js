function clasificarEdad(edad) {
    return (edad < 18) 
        ? "Menor de edad" 
        : (edad <= 65) 
            ? "Adulto" 
            : "Adulto mayor";
}
let edad = parseInt(prompt("Ingrese su edad:"));
if (isNaN(edad)) {
    console.log("Ingrese un numero valido.");
} else {let clasificacion = clasificarEdad(edad);
    console.log("Usted es: " + clasificacion);
}