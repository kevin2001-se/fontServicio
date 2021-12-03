import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Auths } from '../interface/Auth.interface';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService,
    private authServicio: AuthService,
    private route: Router) { }
  ngOnInit(): void {
    if (localStorage.getItem("auth")) {
      this.route.navigate(["page/sistema"]);
    }
  }

  Auths: Auths = {
    id: 0,
    nombre: "",
    correo: "",
    contrasena: "",
    foto: "",
    tipo: {
      idTipo: 0,
      nombreTipo: ""
    }
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        console.log(data)
      }
    );
  }

  IniciarSesion(){
    this.authServicio.InicarLogeueo(this.Auths.correo,this.Auths.contrasena)
        .subscribe(
          resp =>{
            if(resp.mensaje != null){
              this.route.navigate(["page/sistema"]);
              localStorage.setItem("auth",JSON.stringify(resp.mensaje))
            }else{
              alert(resp.mensaje)
            }
          }
        )
  }

}
