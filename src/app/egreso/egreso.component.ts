import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html'
})

export class EgresoComponent implements OnInit {

  egresos:Egreso[]=[];
 
  @Input() ingresoTotal:number=0;

  constructor(private egresoService:EgresoService) { }

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso) {
    return egreso.valor/this.ingresoTotal;
  }
}
