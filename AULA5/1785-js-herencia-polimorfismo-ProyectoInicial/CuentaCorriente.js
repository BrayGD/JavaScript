import { Cliente } from "./Cliente.js";
import { cuenta } from "./cuenta.js";

export class CuentaCorriente extends cuenta{
   
    static cantidadCuentas = 0;

  
    constructor(cliente, numero, agencia) {
        super (cliente, numero, agencia)
        CuentaCorriente.cantidadCuentas++;
    }

   
}