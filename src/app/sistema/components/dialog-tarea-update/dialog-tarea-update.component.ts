import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-dialog-tarea-update',
  templateUrl: './dialog-tarea-update.component.html',
  styleUrls: ['./dialog-tarea-update.component.css']
})
export class DialogTareaUpdateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogTareaUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tarea,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
