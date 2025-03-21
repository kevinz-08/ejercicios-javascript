let unidadesDisponibles = 200;
alert("El stock inicial de la tienda es de: " + unidadesDisponibles);

unidadesDisponibles += 50;
alert("Se recibieron 50 unidades nuevas. Stock actual: " + unidadesDisponibles);

let unidadesVendidas = 30 * 2;
unidadesDisponibles -= unidadesVendidas;
alert("Se vendieron 30 unidades con la oferta 2x1. Stock actual: " + unidadesDisponibles);

let unidadesPorAlmacen = unidadesDisponibles / 5;
alert("Se distribuyeron las unidades entre 5 almacenes. Cada uno recibe: " + unidadesPorAlmacen);

let unidadesDescuento = unidadesDisponibles % 6;
alert("Los productos restantes para descuentos son: " + unidadesDescuento);

console.log("Stock final por almacén:", unidadesPorAlmacen);
console.log("Unidades en descuentos:", unidadesDescuento);