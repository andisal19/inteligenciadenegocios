import { Component, OnInit } from '@angular/core';
import { Falla } from 'src/app/class/falla';
import { Router } from '@angular/router';
import { FallaService } from 'src/app/services/falla.service';

@Component({
  selector: 'fallas',
  templateUrl: './listafallas.component.html',
  styleUrls: ['./listafallas.component.scss']
})
export class ListafallasComponent implements OnInit {

  constructor(private fallaservice: FallaService ,private router: Router) { }

  Fallas: Falla [];

  ngOnInit(): void {
    this.getListFallas();
  }

  
  private getListFallas (){
    this.fallaservice.getFallaList().subscribe(dato => {
      this.Fallas = dato;
    });
  }

}
