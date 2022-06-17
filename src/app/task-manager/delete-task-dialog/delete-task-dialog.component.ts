import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogParams, TaskModel } from 'src/app/shared/models/task-model';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.scss']
})
export class DeleteTaskDialogComponent implements OnInit {

  title: string = "";
  existingTask: TaskModel;
  
  constructor(private dialog: MatDialog, 
            public dialogRef: MatDialogRef<DeleteTaskDialogComponent>, //to close dialog
            @Inject(MAT_DIALOG_DATA) public data: DialogParams, private snackBar: MatSnackBar)
            { 
              this.title = data.title;
              this.existingTask = data.task;
            }

  ngOnInit(): void {
  }

  saveDelete(){
    let taskData = this.existingTask.taskId;
    this.cancelDelete(taskData);
  }
  
  cancelDelete(data?: any){
    this.dialogRef.close(data)
  }
}
