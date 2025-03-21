let saldoInicial = Number(10000);
alert("Su saldo inicial es de $"+ saldoInicial);

saldoInicial += 2000;
alert("Se recibo un Deposito");
console.log(("Su saldo actual es de $"+ saldoInicial));

saldoInicial -= 5000;
alert("Se retira un monto de $5000");
console.log(("Su saldo actual es de $"+ saldoInicial));

saldoInicial *= 0.98;
alert("Se cobra una comsion bancaria del 2%");
console.log(("Su saldo actual es de $"+ saldoInicial));

saldoInicial /=  3;
alert("Se divide el saldo en 3 cuentas diferentes");
console.log(("El saldo actual de cada una de las 3 cuentas es de $"+ saldoInicial.toFixed(3)));
