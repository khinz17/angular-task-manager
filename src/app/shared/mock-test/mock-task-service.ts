import { of } from "rxjs";
import { tasks } from "src/app/task-manager/task";
import { TaskModel } from "../models/task-model";


export class MockTaskService {

    public tasksData: TaskModel[] = JSON.parse(JSON.stringify(tasks));

    constructor() {}

    getTaskList(){
        return of(this.tasksData);
    }

    getTaskById(id: number){
        return of([]);
    }

    addTask(data: TaskModel){
        this.tasksData.push(data);
        return of(this.tasksData);
    }

    updateTask(){
        return of([]);
    }

    deleteTask(id: any){
        this.tasksData = this.tasksData.filter(t => t.taskId != id);
        return of(this.tasksData);
    }

    searchTask(searchData: any){
        this.tasksData = this.tasksData.filter(t => t.taskName == searchData.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()));
        return of(this.tasksData);
    }
}