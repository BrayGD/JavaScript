const ciudadDestino = "Bogotá"
const paisesDisponibles = ["Bogotá", "colombia", "Brasil", "Perú", "Argentina", "México"];




let edadPasajero = 17;
let estaAcompanado = false;

console.log(`verificando pasaje para ${ciudadDestino}`);
//verificamos que el pasajero cumple las reglas
if (edadPasajero >= 18  || estaAcompanado) {
    //Evaluamos si la ciudad esta disponible para viajar
    if (paisesDisponibles.indexOf(ciudadDestino) > -1){
    console.log("Pasaje esta disponible para venta");
} else {
    console.log("ciudad no disponible para venta");
} 
} else {
        if (edadPasajero >= 16 && ciudadDestino == "Bogotá") {
        console.log("Pasaje esta disponible para venta");
    }
        else {
            
            console.log ("pasajero no cumple los requisitos");
        
    }
}