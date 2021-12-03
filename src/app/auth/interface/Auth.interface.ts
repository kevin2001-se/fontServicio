export interface TipoUsuario{
  idTipo: number;
  nombreTipo: string;
}

export interface Auths{
  id?:number;
  nombre?:string;
  correo:string;
  contrasena:string;
  foto?:string;
  tipo: TipoUsuario
}
