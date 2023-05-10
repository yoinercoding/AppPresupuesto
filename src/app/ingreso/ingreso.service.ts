import { Ingreso } from "./ingreso.model";

export class IngresoService{
    
        ingresos:Ingreso[]=[
        new Ingreso("Salario", 8000),
        new Ingreso("Dividendos", 1000),
        new Ingreso("Pequeños trabajos", 500),
        new Ingreso("Otros", 500)
    ];
    
    //METODO ELIMINAR
    eliminar(ingreso:Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1); //METODO SPLICE BORRA UN ELEMENTO DEL INDICE
    }
}