import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { DeleteTaskDialogComponent } from './delete-task-dialog/delete-task-dialog.component';
import { TaskConfirmationDialogComponent } from './task-confirmation-dialog/task-confirmation-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { TaskHomePageComponent } from './task-home-page/task-home-page.component';
import { TaskManagerComponent } from './task-manager.component';
import { MaterialModule } from '../material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskDialogComponent,
    TaskConfirmationDialogComponent,
    AddTaskDialogComponent,
    DeleteTaskDialogComponent,
    TaskHomePageComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    MatPaginatorModule


  ],

  exports: [
    TaskManagerComponent,
    TaskDialogComponent,
    TaskConfirmationDialogComponent,
    AddTaskDialogComponent,
    DeleteTaskDialogComponent,
    TaskHomePageComponent,
  ]
})
export class TaskManagerModule { }
