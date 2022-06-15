import { Egreso } from "./egreso.model";

export class EgresoService{
   
        egresos:Egreso[]=[
        new Egreso("Resta Depto", 900),
        new Egreso("Ropa", 200)
    ];

    //METODO ELIMINAR
    eliminar(egreso:Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1); //METODO SPLICE BORRA UN ELEMENTO DEL INDICE
    }
}
