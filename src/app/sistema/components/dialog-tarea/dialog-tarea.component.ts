import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-dialog-tarea',
  templateUrl: './dialog-tarea.component.html',
  styleUrls: ['./dialog-tarea.component.css']
})
export class DialogTareaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogTareaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tarea,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
