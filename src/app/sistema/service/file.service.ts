import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://localhost:8090/api/files/upload";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  subirFile(file: any): Observable<any>{

    const headers= new HttpHeaders()
    .set('content-type', 'multipart/form-data; boundary=<calculated when request is sent>')

    return this.http.post<any>(url,file);
  }

}
