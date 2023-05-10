import { Egreso } from "./egreso.model";

export class EgresoService{
   
        egresos:Egreso[]=[];

    //METODO ELIMINAR
    eliminar(egreso:Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1); //METODO SPLICE BORRA UN ELEMENTO DEL INDICE
    }
}
