import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Archivo } from '../interfaces/archivo.interface';

const url = "http://localhost:8090/api/archivo";

@Injectable({
  providedIn: 'root'
})

export class ArchivoService {

  constructor(private http: HttpClient) { }

  registrarArchivo(archivo: Archivo ):Observable<Archivo>{

    return this.http.post<Archivo>(url, archivo);

  }

  listarArchivo(id: number):Observable<any>{
    return this.http.get<any>(url+'/'+id);
  }



  eliminar(id: number):Observable<any>{
    return this.http.delete<any>(url+'/eliminar/'+id);
  }

}
