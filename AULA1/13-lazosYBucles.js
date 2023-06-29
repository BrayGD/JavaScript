const paisesDisponibles = ["Venezuela", "colombia", "Brasil", "Perú", "Argentina", "México"];
const precioPais = [500, 600, 700, 650, 750, 200];
const presupuestoDisponible = 100;

let i = 0;
while (precioPais[i] > presupuestoDisponible && i < paisesDisponibles.length) {
    i++; 
}
if (i == paisesDisponibles.length){
    console.log ("No tenemos pasaje disponible") 
} else{
    console.log ("puedes comprar pasaje para:" + paisesDisponibles [i])
}

