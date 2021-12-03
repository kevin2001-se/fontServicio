import { Component, OnInit } from '@angular/core';
import { ArchivoService } from '../../service/archivo.service';
let numeber = JSON.parse(localStorage.getItem("auth")!);
@Component({
  selector: 'app-almacenamiento',
  templateUrl: './almacenamiento.component.html',
  styleUrls: ['./almacenamiento.component.css']
})
export class AlmacenamientoComponent implements OnInit {

  tamano: number = 0;
  constructor(private archivoService: ArchivoService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar(){
    this.archivoService.listarArchivo(numeber.codigoUsu).subscribe(
      resp => {
        for (let i = 0; i < resp.length; i++) {
          this.tamano += Number.parseFloat(resp[i].tamaño);
        }
      }
    )
    console.log(this.tamano)
  }

}
