import { ChangeDetectorRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MockChangeDetector } from '../shared/mock-test/mock-change-detector';
import { MockDialog } from '../shared/mock-test/mock-dialog';
import { MockRouter } from '../shared/mock-test/mock-router';
import { MockSnackBar } from '../shared/mock-test/mock-snack-bar';
import { MockTaskService } from '../shared/mock-test/mock-task-service';
import { TaskService } from '../shared/services/task.service';
import { tasks } from './task';

import { TaskManagerComponent } from './task-manager.component';

describe('TaskManagerComponent', () => {
  let component: TaskManagerComponent;
  let fixture: ComponentFixture<TaskManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManagerComponent ],
       providers: [{

        provide: MatDialog,
        useValue: MockDialog
       },
      {
        provide: TaskService,
        useClass: MockTaskService
      },
      {
        provide: ChangeDetectorRef,
        useValue: MockChangeDetector
      },
      {
        provide: Router,
        useValue: MockRouter
      },
      {
        provide: MatSnackBar,
        useValue: MockSnackBar
      }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(TaskManagerComponent);
      component = fixture.componentInstance; //TaskManagerComponent test Instance
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should retrieve task data', async(() => {
    component.populateTable();
    expect(component.dataSource.data.length).toEqual(tasks.length);
  }));

  it('should be create new task data', async(() =>{
    const task = {
      taskId: 1, 
        taskName: 'Study', 
        taskDescription: 'Learning C#', 
        status: 'Complete', 
        completionRating: 5, 
        taskCreated: new Date(), 
        taskCompleted: new Date(),
        tags: [ 
            { tagId: 1, tagName: 'Sample' }
        ]
    };

    component.addTask(task);

    expect(component.dataSource.data.length).toBeGreaterThan(tasks.length);
  }));

  it('should be search a task detial', async(() => {

    component.taskFilter = "Study";

    component.searchTask();

    expect(component.dataSource.data.length).toBeGreaterThanOrEqual(tasks.filter(t => t.taskName.includes(component.taskFilter.toLowerCase())).length);
  }));

  it('should be delete task data', async(() =>{
    const task = {
        taskId: 1, 
        taskName: 'Study', 
        taskDescription: 'Learning C#', 
        status: 'Complete', 
        completionRating: 5, 
        taskCreated: new Date(), 
        taskCompleted: new Date(),
        tags: [ 
            { tagId: 1, tagName: 'Sample' }
        ]
      };

      component.deleteTask(task);

      expect(component.dataSource.data.length).toBeLessThan(tasks.length);
  }));

  // it('shoud be update task data',async(() => {
    // const task = {
    //   taskId: 2, 
    //   taskName: 'Study', 
    //   tags: [ 
    //       { tagId: 1, tagName: 'Sample' }
    //   ]
    // };
  // }));

});
