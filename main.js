let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));

const compararNumeros = function (num1, num2) {
    if (num1 > num2) {
        return `El número ${num1} es mayor que ${num2}`;
    } else if (num1 < num2) {
        return `El número ${num1} es menor que ${num2}`;
    } else {
        return `El número ${num1} es igual a ${num2}`;
    }
};

alert(compararNumeros(numero1, numero2));
console.log(compararNumeros(numero1, numero2));