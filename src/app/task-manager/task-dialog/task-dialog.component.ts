import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogParams, TaskModel } from 'src/app/shared/models/task-model';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  title: string = "";
  existingTask: TaskModel;


  taskManagerEditFormGroup = new FormGroup({
    taskId: new FormControl(null),
    taskName: new FormControl(null, Validators.required),
    taskDescription: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required)
  })


  constructor(private taskSerive: TaskService, 
    private activateRoute: ActivatedRoute, 
    private router: Router, private snackBar: MatSnackBar) {}


  ngOnInit(): void {
    this.taskSerive.getTaskById(this.activateRoute.snapshot.paramMap.get('id'))
    .subscribe(res =>{
      this.set(res)
    })
    
  }

  set(value: any) {
    //set the values of form group using the existing task
    this.taskManagerEditFormGroup.controls['taskId'].setValue(value.taskId)
    this.taskManagerEditFormGroup.controls['taskName'].setValue(value.taskName)
    this.taskManagerEditFormGroup.controls['taskDescription'].setValue(value.taskDescription)
    this.taskManagerEditFormGroup.controls['status'].setValue(value.status)
  }

  save(){
    //console.log('task:', this.taskManagerEditFormGroup.value)
    //update the values of the existingTask using the values from the form group
    this.taskSerive.updateTask(this.taskManagerEditFormGroup.value, this.activateRoute.snapshot.paramMap.get('id'))
    .subscribe( res =>{
      this.router.navigate(['/']);
      this.snackBar.open('Successfully Updated','Ok',{
        horizontalPosition:'center',
        verticalPosition:'bottom',
        duration: 3000,
      })
    })
  }
  
  cancel(){
    this.router.navigate(['/'])
  }
}
