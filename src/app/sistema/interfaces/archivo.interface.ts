import { Usuario } from './usuario.interface';

export interface Archivo{
  codigoArchivo?: number;
  nombre: string;
  usuario: Usuario;
  tamaño: string
}
