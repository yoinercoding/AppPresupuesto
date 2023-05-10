import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit {

  tipo:string="ingresoOperacion";
  descripcionInput:string="";
  valorInput:number=0;

  constructor(private ingresoService:IngresoService, private egresoService:EgresoService) { 

  }

  ngOnInit(): void {
  }

  tipoOperacion(event : Event) {
    this.tipo = (event.target as HTMLInputElement).value;
  }

  agregarValor() {
    if(this.tipo == "ingresoOperacion") 
       this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else 
       this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
  }
}
