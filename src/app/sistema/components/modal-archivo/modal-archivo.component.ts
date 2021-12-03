import { Component, OnInit } from '@angular/core';
import { FileService } from '../../service/file.service';
import { ArchivoService } from '../../service/archivo.service';
import { Archivo } from '../../interfaces/archivo.interface';
import { Usuario } from '../../interfaces/usuario.interface';
import { ArchivosComponent } from '../../pages/archivos/archivos.component';

let numeber = JSON.parse(localStorage.getItem("auth")!);
@Component({
  selector: 'app-modal-archivo',
  templateUrl: './modal-archivo.component.html',
  styleUrls: ['./modal-archivo.component.css']
})
export class ModalArchivoComponent {

  almacenamiento:number = 50000000;

  constructor(private fileService:FileService, private archivoServicio: ArchivoService) { }

  archivo: Archivo = {
    nombre: "",
    usuario: {
      codigoUsu: 0
    },
    tamaño: ""
  }

  selectFile(event: any){

    const file = event.target.files[0];
    const formData = new FormData()
    formData.append("files", file)
    const nombre = file.name;
    const tipo = nombre.split(".")[1];
    const tamaño = Math.ceil(file.size*(1.0/1024)).toString()
    this.archivo.nombre = nombre;
    this.archivo.tamaño = tamaño;
    this.archivo.usuario.codigoUsu = numeber.codigoUsu;
    console.log(tamaño)

    this.archivoServicio.registrarArchivo(this.archivo).subscribe(
      resp => {
        this.fileService.subirFile(formData).subscribe()
        console.log(resp);
        alert("Se registro el archivo")
      }
    );
  }

}
