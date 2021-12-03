import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auths } from '../interface/Auth.interface';
import { Usuario } from '../../sistema/interfaces/usuario.interface';

const url = "http://localhost:8090/";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  InicarLogeueo(correo: string, pass: string): Observable<any>{
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')

    return this.http.post<any>(`${url}api/authUsuario/logeo?correo=${correo}&contrasena=${pass}`, headers)

  }

  registrarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${url}api/authUsuario`,usuario);
  }

}
