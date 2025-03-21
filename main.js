let tragosTomados = Number(prompt("sr, cuantos tragos a tomado?"));

if (tragosTomados > 0) {
    console.log("Sr, debido a que a ingerido alcohol, usted no podra conducir");    
}
else if (tragosTomados == 0){
    console.log("Nos alegra que seas un conductor responsable");
}else{
    console.log("El valor ingresado no es valido");
    
}