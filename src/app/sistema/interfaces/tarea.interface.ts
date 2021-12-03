import { Usuario } from './usuario.interface';
export interface Tarea{
  codigoTarea?: number
  nombre: string;
  usuario: Usuario;
  descripcion: string;
  fechaTarea: string;
}
