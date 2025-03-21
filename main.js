let dia = prompt("Ingresa un dia de la semana (por ejemplo, 'Lunes'):");
 dia = dia.toLowerCase();
 switch (dia) {
     case "lunes":
         console.log("Es el inicio de la semana.");
         break;
     case "martes":
         console.log("Ya es martes");
         break;
     case "miércoles":
     case "miercoles": 
         console.log("Mitad de semana.");
         break;
     case "jueves":
         console.log("Ya casi es viernes, pero es jueves");
         break;
     case "viernes":
         console.log("Por fin es viernes");
         break;
     case "sábado":
     case "sabado":
         console.log("El fin de semana ha llegado.");
         break;
     case "domingo":
         console.log("Mañana empieza una nueva semana.");
         break;
     default:
         console.log("Error: Ingresa un dia de la semana valido.");
         break;
 }