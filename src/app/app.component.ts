import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //INYECCION DE LOS SERVICIOS
  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(private ingresoService:IngresoService,
              private egresoService:EgresoService) {
                this.ingresos = ingresoService.ingresos;
                this.egresos = egresoService.egresos;
    }

    //METODO OBTENEMOS EL VALOR DE INGRESO TOTAL
    getIngresoTotal() {
      let ingresoTotal:number=0;
      this.ingresos.forEach(ingreso => {
        ingresoTotal =+ ingreso.valor;
      });
      return ingresoTotal;
    }

    //METODO OBTENEMOS EL VALOR EGRESO TOTAL
    getEgresoTotal() {
      let egresoTotal:number=0;
      this.egresos.forEach(egreso => {
        egresoTotal =+ egreso.valor;
      });
      return egresoTotal;
    }

    //METODO OBTENEMOS EL PORCENTAJE TOTAL
    getPorcentajeTotal(){
      return this.getEgresoTotal()/this.getIngresoTotal();
    }

    //METODO OBTENEMOS PRESUPUESTO TOTAL
    getPresupuestoTotal(){
      return this.getIngresoTotal() - this.getEgresoTotal();
    }
}
