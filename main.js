let barraEnergia = Number(100);
alert("la barra incial de el jugador es de "+ barraEnergia);

barraEnergia += 50;
alert("Gano un bonus");

barraEnergia -= 20;
alert("Perdio un punto de energia");

barraEnergia *= 2;
alert("Gano un bonus de energia(se duplico)");

barraEnergia /= 1.25;
alert("El jugador consumio el 25% de su energia");

barraEnergia %= 7;
alert("El jugador aplico un ajuste para redondear la energia")

console.log("La barra actual de energia es = "+ barraEnergia);
