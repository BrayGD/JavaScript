const ciudadDestino = "Bogotá"
const paisesDisponibles = ["Bogotá", "colombia", "Brasil", "Perú", "Argentina", "México"];

let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;
let estaCasado = false;

console.log(`verificando pasaje para ${ciudadDestino}`);
// A && B OR C
if (paisesDisponibles.indexOf(ciudadDestino) > -1 && edadPasajero >= 18 && tienePasaporte && !estaCasado) {
    console.log("Paquete para solteros disponible para venta");
} else {
    console.log("ciudad no disponible para viajar o pasajero menor de edad sin autorización");
}