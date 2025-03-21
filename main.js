let peliculaElegida = prompt(
    "Elige tu película favorita de la siguiente lista:\n" +
    "1. Avengers EndGame\n" +
    "2. El paseo 5\n" +
    "3. Las esquinas de la mesa redonda\n" +
    "4. Avatar\n" +
    "5. Coco\n"
);

if (peliculaElegida < 1 ){
    alert("La opción ingresada no es válida. Por favor, elige una opción correcta");
}
else if (peliculaElegida > 5 ){
    alert("La opción ingresada no es válida. Por favor, elige una opción correcta");
}else{
    alert("Has elegido: " + peliculaElegida);
    console.log("Película seleccionada:", peliculaElegida);
}

