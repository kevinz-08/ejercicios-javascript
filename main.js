console.log("Numeros entre -20 y 30:");
 for (let i = -20; i <= 30; i++) {
     console.log(i);
 }
 console.log("Numeros pares entre 20 y 60:");
 for (let i = 20; i <= 60; i++) {
     if (i % 2 === 0) { 
         console.log(i);
     }
 }
 console.log("Numeros impares entre 600 y 666:");
 for (let i = 600; i <= 666; i++) {
     if (i % 2 !== 0) {
         console.log(i);
     }
 }
 console.log("Numeros primos entre 1 y 150:");
 function esPrimo(numero) {
     if (numero <= 1) return false;
     for (let i = 2; i <= Math.sqrt(numero); i++) {
         if (numero % i === 0) return false;
     }
     return true;
 }
 for (let i = 1; i <= 150; i++) {
     if (esPrimo(i)) {
         console.log(i);
     }
 }