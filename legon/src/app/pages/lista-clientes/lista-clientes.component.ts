import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/class/cliente';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';



@Component({
  selector: 'clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente [];
  aux: any;

  constructor(public clienteservice:ClienteService ,public router: Router) { }

  ngOnInit(): void {
    this.getListClientes();
    console.log(this.getKpi1());
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


}
