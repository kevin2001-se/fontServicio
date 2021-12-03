import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaComponent } from './pages/sistema/sistema.component';
import { HomeComponent } from './pages/home/home.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { ArchivosComponent } from './pages/archivos/archivos.component';
import { AlmacenamientoComponent } from './pages/almacenamiento/almacenamiento.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent,
    children: [
      {
        path: "sistema",
        component: SistemaComponent
      },
      {
        path: "tareas",
        component: TareasComponent
      },
      {
        path: "archivo",
        component: ArchivosComponent
      },
      {
        path: "almacenamiento",
        component: AlmacenamientoComponent
      },
      {
        path: "**",
        redirectTo: "sistema"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemasRoutingModule { }
