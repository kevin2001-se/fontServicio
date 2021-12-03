import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Usuario } from '../../sistema/interfaces/usuario.interface';
import { Auths, TipoUsuario } from '../interface/Auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioServicio: AuthService,private route: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("auth")) {
      this.route.navigate(["page/sistema"]);
    }
  }

  usuarios: Usuario = {
    nombre: "",
    correo: "",
    contrasena: "",
    codigoTipoUsu: 1
  }

  registrarUsuario(){
    this.usuarioServicio.registrarUsuario(this.usuarios).subscribe(
      resp => {
        alert("Se registro correctamente el usuario")
        this.route.navigate(["auth/login"]);
      }
    )
  }

}
