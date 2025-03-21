let a = prompt("Ingresa el primer número:");
let b = prompt("Ingresa el segundo número:");
let c = prompt("Ingresa el tercer número:");

a = Number(a);
b = Number(b);
c = Number(c);

if (a > b && a > c) {
    alert("El número mayor es: " + a);
} else if (b > a && b > c) {
    alert("El número mayor es: " + b);
}
else if (c > a && c > b){
    alert("El número mayor es: " + c);
}else{
    alert("Ingresa numeros validos, por favor");
}