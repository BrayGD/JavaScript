/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import { cuentaAhorro, cuentaAhorro } from './CuentaAhorro.js';


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente("Corriente", cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente("Corriente", cliente2,'2','002');

const cuentaAhorroLeonardo = new cuentaAhorro("Ahorro", cliente, "9985", "001", 0);




