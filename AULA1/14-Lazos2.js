const datos = [
    {
    "ciudad":"Venezuela",
    "precio": 500
}, 

{
    "ciudad":"Colombia",
    "precio": 600
},

{
    "ciudad":"Brasil",
    "precio": 700
}, 
{
    "ciudad":"Perú",
    "precio": 650
}, 
{
    "ciudad":"Argentina",
    "precio": 750
}, 
{
    "ciudad":"México",
    "precio": 200
} 

]
//de esta forma se hace una lista en mapas con []
const presupuestoDisponible = 700;

let i = 0;
/*while (i < datos.length && datos[i].precio > presupuestoDisponible){
     i++; 
}*/ 

let paisSeleccionado = "";
do{
    if (datos[i].precio > presupuestoDisponible){
        paisSeleccionado = datos [i].ciudad
    }
    i++;
} while (i < datos.length && paisSeleccionado == "" ) 
    if (i == datos.length){
    console.log ("No tenemos pasaje disponible") 
} else{
    console.log ("puedes comprar pasaje para:" + paisSeleccionado)
}