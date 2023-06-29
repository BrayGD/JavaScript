//definición de una lista con tipo de datos alfanúmerico//
const ciudadesDisponibles = new Array ("Bogota", "Lima", "Brasilia", "CDMX");


//definicion de lista de forma abreviada //

const paisesDisponibles = ["colombia", "Brasil", "Perú", "Argentina", "México"];

//contabilizar o saber cuantos elementos hay en una lista//
const cantidadDeCiudades = ciudadesDisponibles.length;

console.log("en la lista de ciudades tenemos ${cantidadDeCiudades.length} elementos"); 

//borrar el primer elemento de una lista, para hacerlo usamos shift//
paisesDisponibles.shift();
console.log(paisesDisponibles);

//borrar el último elemento de una lista, para hacerlo usamos pop//
paisesDisponibles.pop();
console.log(paisesDisponibles);

//filtro de elementos en la lista//
const paisesFiltrados = paisesDisponibles.filter ((e) => e.length > 6);
console.log(paisesFiltrados); 

//unificar los elementos en una cadena de caracteres
console.log(paisesDisponibles.join ("-"));

//ordenar la lista
console.log(paisesDisponibles.sort());

//conociendo la posición
//console.log("Perú esta en la posición: ${paisesDisponibles.indexOf("peru")}");

//unificar dos listas 

const listaPaisesYCiudades = paisesDisponibles.concat (ciudadesDisponibles);

console.log(listaPaisesYCiudades)