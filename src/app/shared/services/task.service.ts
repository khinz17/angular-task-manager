import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task-model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api = environment.api;
  tableData: TaskModel[] = []

  constructor(private http: HttpClient) { }

  getTaskList(): Observable<TaskModel[]>{
    return this.http.get<TaskModel[]>(this.api)
  }

  searchTask(task: string): Observable<TaskModel[]>{
    const filterValue = task;
    console.log('Filtervalue-- ', filterValue);
    return this.http.get<TaskModel[]>(this.api).pipe(
      map(tasks => tasks.filter(t => { 
        return t.taskName.toLowerCase().includes(filterValue) ||
              t.taskDescription.toLowerCase().includes(filterValue)}
      )));
  }

  addTask(taskValue: any): Observable<TaskModel[]>{
    // return this.http.post<TaskModel[]>(this.api, taskValue)
    return this.http.post<TaskModel[]>(this.getEndPoint('POST'), taskValue)
  }

  updateTask(taskValue: any, id: any): Observable<TaskModel[]>{
    // return this.http.put<TaskModel[]>(this.api + id, taskValue)
    return this.http.put<TaskModel[]>(this.getEndPoint('PUT', id), taskValue)
  }

  deleteTask(id: any): Observable<TaskModel[]>{
    return this.http.delete<TaskModel[]>(this.getEndPoint('DELETE', id))
  }

  // getTaskById(id: any): Observable<TaskModel[]>{
  //   return this.http.get<TaskModel[]>(this.api + id)
  // }

  getTaskById(id: any): Observable<TaskModel[]>{
    return this.http.get<TaskModel[]>(this.getEndPoint('GET-BY-ID', id))
  }

  private getEndPoint(value: string, parameter?: string): any{
    switch(value){
      case 'GET': return environment.api;
      case 'POST': return environment.api;
      case 'GET-BY-ID': return environment.api + parameter;
      case 'PUT': return environment.api + parameter;
      case 'DELETE': return environment.api + parameter;
      default: return "";
    }
  }
}
