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

  constructor(private clienteservice:ClienteService ,private router: Router) { }

  clientes: Cliente [];

  ngOnInit(): void {
    this.getListClientes();
  }

  private getListClientes (){
    this.clienteservice.getClienteList().subscribe(dato => {
      this.clientes = dato;
    });
  }

}
