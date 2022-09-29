import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/class/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'grafic01',
  templateUrl: './grafic01.component.html',
  styleUrls: ['./grafic01.component.scss']
})
export class Grafic01Component{

  clientes: Cliente [];
  aux: any;

  constructor(public clienteservice:ClienteService ,public router: Router) {
    this.getKpi1();
   }
  public getListClientes (){
    this.clienteservice.getClienteList().subscribe((dato: any) => {
      this.clientes = dato;
        
    }); 

  }
  public getKpi1() {
    let mesActual = 0;
    let mesAnterior = 0;
    this.clienteservice.getClienteList().subscribe(dato => {
      

      dato.forEach((d:any) => {

      if ("/07/2022" === d.fecha_de_afliliacion.slice(2, 10)) {
        mesAnterior += 1;
      } 

      if ("/08/2022" === d.fecha_de_afliliacion.slice(2, 10)) {
        mesActual +=1;
      }   
      });

      this.aux = ((mesActual - mesAnterior)/mesActual) * 100; 

    })
  }

  multi: any[];

  view: [number, number] = [200, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Incremento numero de clientes';
  showYAxisLabel = true;
  yAxisLabel = 'Agosto - Julio';

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f22', '#000', '#0ff'],
  }; 

  onSelect(event:any) {
    console.log(event);
  }

    single = [
    {
      "name": "Indicador kpi 01",
      "value": 27.272,
    }
  ];

}
