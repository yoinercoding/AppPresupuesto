import { Ingreso } from "./ingreso.model";

export class IngresoService{
    
        ingresos:Ingreso[]=[
        new Ingreso("Salario", 4000),
        new Ingreso("Venta Coche", 500)
    ];
    
    //METODO ELIMINAR
    eliminar(ingreso:Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1); //METODO SPLICE BORRA UN ELEMENTO DEL INDICE
    }
}