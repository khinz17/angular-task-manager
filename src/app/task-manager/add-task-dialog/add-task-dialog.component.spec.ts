import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MockRouter } from 'src/app/shared/mock-test/mock-router';
import { MockSnackBar } from 'src/app/shared/mock-test/mock-snack-bar';
import { MockTaskService } from 'src/app/shared/mock-test/mock-task-service';
import { TaskService } from 'src/app/shared/services/task.service';

import { AddTaskDialogComponent } from './add-task-dialog.component';

describe('AddTaskDialogComponent', () => {
  let component: AddTaskDialogComponent;
  let fixture: ComponentFixture<AddTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskDialogComponent ],
      providers:[

        {
            provide: TaskService,
            useClass: MockTaskService
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
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
});
