import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstados } from '../interface/Estados';
import { IFormDataEmail } from '../interface/dataEmail';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private _http: HttpClient) { }

  getEstados(): Observable<IEstados[]>{

    return this._http.get<IEstados[]>('https://localhost:7215/api/DataForm/listaCiudades');
  }

  enviarNotificacion(data:IFormDataEmail): Observable<IFormDataEmail>{
    console.log("LLEGAMOS XD")
    return this._http.post<IFormDataEmail>('https://localhost:7215/api/DataForm/EnviarNotificacion', data);
  }

}
