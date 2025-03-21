const num = Number(prompt("Ingrese un numero:"));

const resultado = isNaN(num)
    ? "Error: No ingresaste un número válido."
    : num % 2 === 0
    ? `El número ${num} es par.`
    : `El número ${num} es impar.`;

alert(resultado);
console.log(resultado);