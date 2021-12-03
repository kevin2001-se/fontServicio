import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../interfaces/usuario.interface';
import { DialogData } from '../../interfaces/dialog.interface';

@Component({
  selector: 'app-dialog-configuracion',
  templateUrl: './dialog-configuracion.component.html',
  styleUrls: ['./dialog-configuracion.component.css']
})
export class DialogConfiguracionComponent implements OnInit {

  pass: string = ""
  Cpass: string = ""

  constructor(public dialogRef: MatDialogRef<DialogConfiguracionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
