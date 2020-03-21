import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskplanerComponent } from './taskplaner.component';

describe('TaskplanerComponent', () => {
  let component: TaskplanerComponent;
  let fixture: ComponentFixture<TaskplanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskplanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskplanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
