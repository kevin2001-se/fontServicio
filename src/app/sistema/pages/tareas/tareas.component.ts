import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tarea } from '../../interfaces/tarea.interface';
import { TareaService } from '../../service/tarea.service';
import { DialogTareaComponent } from '../../components/dialog-tarea/dialog-tarea.component';
import { Usuario } from '../../interfaces/usuario.interface';
import { Router } from '@angular/router';
import { DialogTareaUpdateComponent } from '../../components/dialog-tarea-update/dialog-tarea-update.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

let ELEMENT_DATA: Tarea[] = [
];

let numeber = JSON.parse(localStorage.getItem("auth")!);
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements AfterViewInit,OnInit {

  displayedColumns: string[] = ['nombre', 'namse', 'weight', 'symbol',"arch"];

  dataSource = new MatTableDataSource<Tarea>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private tareaServicio: TareaService,public dialog: MatDialog,private route: Router){

  }

  ngOnInit(): void {
  console.log(this.dataSource)
  if (!localStorage.getItem("auth")) {
    this.route.navigate(["auth/login"]);
  }
  }

  tarea: Tarea = {
    nombre: "",
    usuario: {
      codigoUsu: numeber.codigoUsu
    },
    descripcion: "",
    fechaTarea: ""
  }

  ngAfterViewInit() {
    this.listar()
  }

  listar(){
    let numeber = JSON.parse(localStorage.getItem("auth")!);
    this.tareaServicio.listar(numeber.codigoUsu).subscribe(
      resp => {
        ELEMENT_DATA = resp
        this.dataSource = new MatTableDataSource<Tarea>(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogTareaComponent, {
      data: this.tarea,
    });

    dialogRef.afterClosed()
    .subscribe(result => {
        this.tarea = result;
        this.tareaServicio.registrar(this.tarea).subscribe(
          resp => {
            console.log(resp)
            if(resp.nombre !== ""){
              this.listar()
              this.tarea = {
                nombre: "",
                usuario: {
                  codigoUsu: numeber.codigoUsu
                },
                descripcion: "",
                fechaTarea: ""
              }
            }
          }
        )
    });
  }

  eliminar(codigo: number){
    this.tareaServicio.eliminar(codigo).subscribe(
      resp => {
        alert("Se elimino la Tarea");
        this.listar()
      }
    )
  }

  openDialogUpdate(id:number){
   this.tareaServicio.buscar(id).subscribe(
     resps => {
      const dialogRef = this.dialog.open(DialogTareaUpdateComponent, {
        data: resps,
      });

      dialogRef.afterClosed()
      .subscribe(result => {
          this.tarea = result;
          this.tareaServicio.update(this.tarea).subscribe(
            resp => {
              console.log(resp)
              if(resp.nombre !== ""){
                this.listar()
              }
            }
          )
      });
     }
   )
  }

}
