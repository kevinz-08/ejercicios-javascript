const clasificarColor = (color) => {
    switch (color.toLowerCase()) {
        case "rojo":
        case "azul":
        case "amarillo":
            return `El color ${color} es primario.`;
        
        case "verde":
        case "naranja":
        case "violeta":
            return `El color ${color} es secundario.`;
        
        default:
            return "No es un color primario ni secundario.";
    }
};


const colorIngresado = prompt("Ingresa un color:").trim(); 


alert(clasificarColor(colorIngresado));
console.log(clasificarColor(colorIngresado));