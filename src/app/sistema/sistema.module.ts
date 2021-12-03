import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemasRoutingModule } from './sistemas-routing.module';
import { SistemaComponent } from './pages/sistema/sistema.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { TareasComponent } from './pages/tareas/tareas.component';
import { ArchivosComponent } from './pages/archivos/archivos.component';
import { AlmacenamientoComponent } from './pages/almacenamiento/almacenamiento.component';
import { ModalArchivoComponent } from './components/modal-archivo/modal-archivo.component';
import { DialogTareaComponent } from './components/dialog-tarea/dialog-tarea.component';
import { FormsModule } from '@angular/forms';
import { DialogTareaUpdateComponent } from './components/dialog-tarea-update/dialog-tarea-update.component';
import { DialogConfiguracionComponent } from './components/dialog-configuracion/dialog-configuracion.component';



@NgModule({
  declarations: [
    SistemaComponent,
    HomeComponent,
    TareasComponent,
    ArchivosComponent,
    AlmacenamientoComponent,
    ModalArchivoComponent,
    DialogTareaComponent,
    DialogTareaUpdateComponent,
    DialogConfiguracionComponent
  ],
  imports: [
    CommonModule,
    SistemasRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    SistemaComponent,
    ArchivosComponent,
  ]
})
export class SistemaModule { }
