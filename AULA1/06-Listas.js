const ciudad1 ="Bogota";
const ciudad2 ="Lima";
const ciudad3 ="Brasil";

//definición de una lista con tipo de datos alfanúmerico//
const ciudadesDisponibles = new Array ("Bogota", "Lima", "Brasil");
console.log (ciudadesDisponibles);

//definicion de lista de forma abreviada //

const paisesDisponibles = ["colombia", "Brasil", "Perú", "Argentina"];
console.log (paisesDisponibles);

{
    ciudadesDisponibles.push ("Uruguay");
    paisesDisponibles.push ("Venezuela");

    console.log (ciudadesDisponibles);
    console.log (paisesDisponibles);

    ciudadesDisponibles.unshift ("México");
    paisesDisponibles.unshift ("Guatemala");

    //mostrando el primer elemnto de la lista//
    console.log (ciudadesDisponibles [0]);
    console.log (paisesDisponibles [0]);

    paisesDisponibles.splice (1,2,"Paraguay");
    console.log (paisesDisponibles);
}
