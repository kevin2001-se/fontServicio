import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea.interface';

const url = "http://localhost:8090/api/tarea";

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  listar(id:number):Observable<Tarea[]>{
    return this.http.get<Tarea[]>(url+"/"+id);
  }

  registrar(tarea: any):Observable<Tarea>{
    return this.http.post<Tarea>(url,tarea);
  }

  eliminar(id: number):Observable<any>{
    return this.http.delete<any>(url+"/eliminar/"+id)
  }

  update(tarea: any):Observable<any>{
    return this.http.put<Tarea>(url,tarea);
  }

  buscar(id: number):Observable<any>{
    return this.http.get<Tarea[]>(url+"/listarbusqueda/"+id);
  }

}
