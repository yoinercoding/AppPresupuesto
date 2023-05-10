import { Egreso } from "./egreso.model";

export class EgresoService{
   
        egresos:Egreso[]=[
        new Egreso("Alquiler", 2000),
        new Egreso("Ropa", 200),
        new Egreso("Mercado", 900),
        new Egreso("Prepaga", 600),
        new Egreso("Gasolina", 500),
        new Egreso("Entretenimiento", 250)
    ];

    //METODO ELIMINAR
    eliminar(egreso:Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1); //METODO SPLICE BORRA UN ELEMENTO DEL INDICE
    }
}
