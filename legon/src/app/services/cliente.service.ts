import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../class/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Para obtener el listado del backend.
  private baseURL = "http://localhost:8080/apiRestkpi/v1/kpi_01";

  constructor(private httpclient: HttpClient) { }

  //Metodo que obtiene los datos del servicio en lista.
  getClienteList ():Observable<Cliente[]>{
    return this.httpclient.get<Cliente[]>(`${this.baseURL}`);
  }

}
