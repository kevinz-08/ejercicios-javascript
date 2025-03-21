function convertirCalificacion(calificacion) {
    if (calificacion >= 90 && calificacion <= 100) {
        return "A";
    } else if (calificacion >= 80 && calificacion < 90) {
        return "B";
    } else if (calificacion >= 70 && calificacion < 80) {
        return "C";
    } else if (calificacion >= 60 && calificacion < 70) {
        return "D";
    } else if (calificacion >= 0 && calificacion < 60) {
        return "F";
    } else {
        return "Calificación no válida";
    }
}
let calificacionNumerica = parseFloat(prompt("Ingresa tu calificación (0-100):"));
let calificacionLetra = convertirCalificacion(calificacionNumerica);
console.log("Tu calificación es: " + calificacionLetra);