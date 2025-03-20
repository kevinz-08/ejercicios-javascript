const num1 = Number (prompt("Ingrese el Numero 1"));
const num2 = Number (prompt("Ingrese el Numero 2"));
const signo = (prompt("Ingrese el signo con el que desea hacer la operacion (+,-,*,/): "));


if (isNaN(num1) && isNaN(num2)){
    alert("Ninguno de los valores colocados son reconocidos como numeros");
    }

else if (isNaN(num1)){
    alert("El primer valor ingresado no es un numero");
}
else if (isNaN(num2)){
    alert("El segundo valor ingresado no es un numero");
}else{
    if (signo == "+"){
        let res = num1 + num2;
        console.log(res);
    }
    
    else if (signo == "-"){
        let res = num1 - num2;
        console.log(res);
    }
    else if (signo == "*"){
        let res = num1 * num2;
        console.log(res);
    }
    else if (signo == "/"){
    
    if (num2 != 0){
        let res = num1 / num2;
        console.log(res);
    }
    else {
        alert("Este Numero no se puede dividir")
    }
    }
    else {
        alert("Este signo no es valido");
    } 
}

