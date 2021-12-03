import { Component, OnInit } from '@angular/core';
import { ArchivoService } from '../../service/archivo.service';
import { Archivo } from '../../interfaces/archivo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {

  listaVacia: boolean = false;

  lista:any[] = []

  constructor(private archivoService: ArchivoService,private route: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("auth")) {
      this.route.navigate(["auth/login"]);
    }
    this.listar()
  }
  listar(){
    let numeber = JSON.parse(localStorage.getItem("auth")!);
    this.archivoService.listarArchivo(numeber.codigoUsu).subscribe(
      resp => {
        console.log(resp)
        this.listaVacia = true;
        this.lista = resp;
      }
    )
  }

  reload(){
    this.listar();
  }

  eliminarArchivo(idArchivo:number){
    this.archivoService.eliminar(idArchivo).subscribe(
      resp => {
        console.log(resp);
        alert("Se elimino el archivo")
        this.listar()
      }
    )
  }

}
