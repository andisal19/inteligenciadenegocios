import { Component, OnInit } from '@angular/core';
import { FallaService } from 'src/app/services/falla.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {


  constructor(private _fallaService: FallaService) { }

  pd_act = 0;
  s_act = 0; 
  pd_ant = 0;
  s_ant = 0; 
  prom_1 = 0;
  prom_2 = 0;
  r_act = 15;
  r_ant = 17;

  resultado_kpi2: number;

  ngOnInit(): void {
    this.getKpi2()
  }


  private getKpi2(){
    

    this._fallaService.getFallaList().subscribe(data => {

      data.forEach((d:any) => {
        
        if ("/09/2022" === d.fecha_de_creacion.slice(2, 10)) {
          this.pd_act += 1;
          this.prom_1 += d.tiempo_total;

        }
        if ("/08/2022" === d.fecha_de_creacion.slice(2, 10)) {
          this.pd_ant += 1;
          this.prom_2 += d.tiempo_total;
        }

      })

      this.s_act = this.pd_act;
      this.s_ant = this.pd_ant;

      this.pd_act = this.prom_1/this.pd_act;
      this.pd_ant = this.prom_2/this.pd_ant;

      //Variación tiempo promedio respuesta
      let vtpr = (1 + ((this.pd_ant - this.pd_act)/this.pd_ant));

      console.log(vtpr);

      // Calidad de las respuestas de las solicitudes de información
      let crsi = (1 + (((this.r_ant/this.s_ant)-(this.r_act/this.s_act))/(this.r_ant/this.s_ant)))
      console.log(crsi);

      this.resultado_kpi2 = ((vtpr + crsi)/2) * 100;
      
      console.log(this.resultado_kpi2);
    })
  }
}
