import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfiguracionComponent } from '../../components/dialog-configuracion/dialog-configuracion.component';
import { SistemaService } from '../../service/sistema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router,public dialog: MatDialog, private sistemaService: SistemaService) { }

  usuario: Usuario = {};
  pass: string = ""


  ngOnInit(): void {
    if (!localStorage.getItem("auth")) {
      this.route.navigate(["auth/login"]);
    }
    this.datas(JSON.parse(localStorage.getItem("auth")!))
  }

  datas(data: any){
    this.usuario = data
  }

  cerrar(){
    localStorage.removeItem('auth');
    this.route.navigate(["auth/login"]);
  }

  openDialogConf(): void {
    const dialogRef = this.dialog.open(DialogConfiguracionComponent, {
      data: { datas: JSON.parse(localStorage.getItem("auth")!), pass: this.pass },
    });

    dialogRef.afterClosed()
    .subscribe(result => {
        if(result.pass === ""){
          this.usuario = result.datas;
          this.sistemaService.actualizar(this.usuario).subscribe(
            resp => {
              alert("Actualizado")
              localStorage.setItem("auth",JSON.stringify(resp))
              this.datas(JSON.parse(localStorage.getItem("auth")!))
            }
          )
        }else{
          this.usuario = result.datas;
          this.usuario.contrasena = result.pass
          this.sistemaService.actualizar(this.usuario).subscribe(
            resp => {
              alert("Actualizado")
              localStorage.setItem("auth",JSON.stringify(resp))
              this.datas(JSON.parse(localStorage.getItem("auth")!))
            }
          )
        }
    });
  }

}
