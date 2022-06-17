import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogParams } from 'src/app/shared/models/task-model';
import { TaskService } from 'src/app/shared/services/task.service';
import { TaskConfirmationDialogComponent } from '../task-confirmation-dialog/task-confirmation-dialog.component';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {
  title: string = "";

  taskManagerAddFormGroup = new FormGroup({
    taskName: new FormControl(null, Validators.required),
    taskDescription: new FormControl(null, Validators.required),
    tag: new FormControl([], Validators.required)
    
  })


  constructor(private taskService: TaskService, 
              private router:Router, private snackBar: MatSnackBar) {}


  // constructor(private dialog: MatDialog,
  //           public dialogRef: MatDialogRef<AddTaskDialogComponent>,) //to close dialog
  //           { 
  //             //this.title = data.title;
  //           }

  ngOnInit(): void {
    this.set()
  }

  set(){
    //this.taskManagerAddFormGroup.controls['name'].setValue('Task Name')
    //this.taskManagerAddFormGroup.controls['description'].setValue('Task Description')
  }

  SaveAddData(){
    
     let task = this.taskManagerAddFormGroup.value;
     let tags = this.taskManagerAddFormGroup.controls['tag'].value as [];

     let tag = [];
     
    tag.push({"tagName": tags});
    task.tag = tag;
    console.log(task);


    // this.dialog.open(TaskConfirmationDialogComponent,{
    // })
    // this.CancelAddTask(task)
    
    this.taskService.addTask(task).subscribe(res => {
      this.router.navigate(['/']);
        this.snackBar.open('Successfully Created', 'Ok',{
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 3000,
        });
         //this.snackBarAddtask()
    })

  }

  // snackBarAddtask(): void{
  //   this.snackBar.open('Success', 'Ok',{
  //     horizontalPosition: 'center',
  //     verticalPosition: 'bottom',
  //     duration: 3000,
  //   });
  // }

  //data?: any
  CancelAddTask(){
    // this.dialogRef.close(data)
    this.router.navigate(['/'])
  }
}