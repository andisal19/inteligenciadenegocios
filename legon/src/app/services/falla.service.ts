import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Falla } from '../class/falla';

@Injectable({
  providedIn: 'root'
})
export class FallaService {

    //Para obtener el listado del backend.
    private baseURL = "http://localhost:8080/apiRestkpi/v2/kpi_02";

    constructor(private httpclient: HttpClient) { }
  
    //Metodo que obtiene los datos del servicio en lista.
    getFallaList ():Observable<Falla[]>{
      return this.httpclient.get<Falla[]>(`${this.baseURL}`);
    }
}
