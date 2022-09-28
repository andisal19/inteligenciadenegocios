import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'grafics',
  templateUrl: './grafics.component.html',
  styleUrls: ['./grafics.component.scss']
})
export class GraficsComponent {

 
  multi: any[];

  view: [number, number] = [700, 400];

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'Rango';

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f00', '#0f0', '#0ff'],
  }; 

  constructor() {
    //Object.assign(this, { single })
  }

  onSelect(event:any) {
    console.log(event);
  }

}
