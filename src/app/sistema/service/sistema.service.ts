import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

const url = "http://localhost:8090/api/authUsuario";

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  constructor(private http : HttpClient) { }

  actualizar(usuario: any):Observable<any>{
    return this.http.put<any>(url,usuario)
  }

}
