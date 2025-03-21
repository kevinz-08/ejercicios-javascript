let presupuesto  = Number(5000);
alert ("Su presupuesto es de $5000")

// compraSuper
presupuesto -= 1000;
console.log("Su presupuesto ahora es: $"+ presupuesto);

// pagoServicios
presupuesto -= 800;
console.log("Su presupuesto ahora es: $"+ presupuesto);

// ingresoAdicional
presupuesto += 1500;
console.log("Su presupuesto ahora es: $"+ presupuesto);

// ajusteInversion
presupuesto *= 1.05;
console.log("Su presupuesto ahora es: $"+ presupuesto);

// pagoImpuestos
presupuesto /= 1.3;
console.log("Su presupuesto ahora es: $"+ presupuesto.toFixed(2));

console.log("Presupuesto Final:",  presupuesto.toFixed(2));



