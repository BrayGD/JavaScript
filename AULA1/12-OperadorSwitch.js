const ciudadDestino = "Argentina"
const paisesDisponibles = ["Bogotá", "colombia", "Brasil", "Perú", "Argentina", "México"];

let valorPasaje = 0; 

console.log(`verificando pasaje para ${ciudadDestino}`);
if (paisesDisponibles.indexOf(ciudadDestino) > -1){
// condicion con if
/*
if (ciudadDestino == "Bogotá"){
    valorPasaje = 500;
} else  if (ciudadDestino == "colombia"){
        valorPasaje = 550;
    } else  if (ciudadDestino == "Brasil"){
        valorPasaje = 600;
    } else  if (ciudadDestino == "Perú"){
        valorPasaje = 630;
    } else  if (ciudadDestino == "Argentina"){
        valorPasaje = 700;
    } else  if (ciudadDestino == "México"){
        valorPasaje = 200;
    }
    */
switch (ciudadDestino) {
    case "Bogotá":
        valorPasaje = 500;
         break;
    
    case "colombia":
        valorPasaje = 550;
            break;

    case "Brasil":
        valorPasaje = 600;
            break;
    
    case "Perú":
        valorPasaje = 650;
            break;
    
    case "Argentina": 
        valorPasaje = 700;
            break;

    case "México":
        valorPasaje = 200;
            break;
    default:
    valorPasaje = 0;
    break;

}
console.log (`El valor del pasaje es: ${valorPasaje}`);
} else{
    console.log("ciudad no disponible para viajar");
}
