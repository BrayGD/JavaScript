//operqdores de comparación
const ciudadDestino = "Bogotá"
const paisesDisponibles = ["Bogotá", "colombia", "Brasil", "Perú", "Argentina", "México"];

//palabra reservada if
//evalúa una condición 


const valorPasaje = "1000"

if (valorPasaje === 1000) {
    console.log ("el pasaje vale 1000");
}

//operadores logicos
// Y (AND) - O (OR) - NO (NOT)
// AND = && - se deben cumplir las dos condiciones
// OR = doble palito - se debe cumplir al menos una condicion 
// NOT = ! - No se cumple la condicion

let edadPasajero = 17;
let estaAcompanado = true;

console.log(`verificando pasaje para ${ciudadDestino}`);

if ((paisesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18  || estaAcompanado)) {
    console.log("Pasaje disponible para venta");
} else {
    console.log("ciudad no disponible para viajar o pasajero menor de edad sin autorización");
}

//Aplicando logica negativa

edadPasajero = 13;
estaAcompanado = false;

console.log(`verificando pasaje para ${ciudadDestino}`);

if (!(paisesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18  || estaAcompanado)) {
    
    console.log("ciudad no disponible para viajar o pasajero menor de edad sin autorización");
} else {
    console.log("Pasaje disponible para venta");
}
