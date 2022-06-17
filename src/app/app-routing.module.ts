import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AddTaskDialogComponent } from './task-manager/add-task-dialog/add-task-dialog.component';
import { TaskDialogComponent } from './task-manager/task-dialog/task-dialog.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: TaskManagerComponent},
    {path: 'taskadd', component: AddTaskDialogComponent},
    {path: 'task/:id', component: TaskDialogComponent},
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: 'page-not-found', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
