import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TaskModel } from '../shared/models/task-model';
import { TaskService } from '../shared/services/task.service';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { DeleteTaskDialogComponent } from './delete-task-dialog/delete-task-dialog.component';
import { TaskConfirmationDialogComponent } from './task-confirmation-dialog/task-confirmation-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';


@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  tagName: string = "";

  taskFilter: string ="";

  displayedColumns: string[] = ['taskName', 'taskDescription', 'status' , 'tags', 'dateCreated','dateCompleted','action'];
  dataSource = new MatTableDataSource<TaskModel>();//ELEMENT_DATA

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;



  constructor(
              private dialog: MatDialog, 
              private taskService: TaskService, 
              private changeDectertorRef: ChangeDetectorRef, 
              private router: Router, 
              private snackBar: MatSnackBar
              ) {}



  ngOnInit(): void {
     this.populateTable();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  populateTable(): void {
    this.taskService.getTaskList().subscribe(data =>{
      this.dataSource.data = data;
    });
  }

  addTask(data: any){
    this.taskService.addTask(data).subscribe(() =>{
      this.populateTable();
      this.changeDectertorRef.detectChanges();
    });
  }

  

  openEditDialog(existingTask: TaskModel) {
    this.router.navigate(['task', existingTask.taskId]);

    // this.dialog.open(TaskDialogComponent, {
    //   data: {
    //     title: 'Edit',
    //     task: existingTask  //transfer existing task from main component to edit dialog. 
    //   }
    // }).afterClosed().subscribe((data: any) =>{
    //   if(data){
    //     this.taskService.updateTask(data, data.taskId)
    //     .subscribe(res => {
    //       this.populateTable();
    //       this.changeDectertorRef.detectChanges();
    //       this.dialog.open(TaskConfirmationDialogComponent, {})
    //     })
    //   }
    // })
  }

  openDeleteDialog(existingTask: TaskModel){
    this.dialog.open(DeleteTaskDialogComponent, {
      data: {
        title: 'Delete',
        task: existingTask //transfer existing task from main component to edit dialog. 
      }
    }).afterClosed().subscribe((data: any) =>{
      if(data)
      this.taskService.deleteTask(data)
      .subscribe(res => {
        this.populateTable();
        this.changeDectertorRef.detectChanges();
        //this.dialog.open(TaskConfirmationDialogComponent,{})
        this.snackBar.open('Successfully Deleted', 'Ok',{
          horizontalPosition: 'center',
          verticalPosition:'bottom',
          duration: 3000
        })
      })
    })
  }

  deleteTask(id: any){
    this.taskService.deleteTask(id.taskId).subscribe({
      next: () => {
        this.populateTable();
        this.changeDectertorRef.detectChanges();
      }
    });
  }

  openAddDialog(){
    this.router.navigate(['taskadd']);

    // this.dialog.open(AddTaskDialogComponent, {
    //   data: {
    //     title: 'Create'
    //   }
    // })
    // .afterClosed().subscribe((data: any) =>{
    //   if(data){
    //     this.taskService.addTask(data).subscribe(res => {
    //       this.populateTable()
    //       this.changeDectertorRef.detectChanges()
    //     })
    //   }
    // })
  }
  
  searchOnChange(event: Event){
    this.taskFilter = (event.target as HTMLInputElement).value;
    this.searchTask();
  }

  searchTask(){
    let taskFilter = this.taskFilter.toLowerCase();
    this.taskService.searchTask(taskFilter).subscribe( (data: any) => {
      if(data){
        this.taskService.searchTask(data).subscribe(res => {
          this.dataSource.data = data;
          this.changeDectertorRef.detectChanges();
        })}
      });
  }
}