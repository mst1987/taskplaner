import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { Task } from './models/task.model';
import { TaskplanerService } from './services/taskplaner.service';
import * as fromTaskplaner from './store/taskplaner.actions';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-taskplaner',
    templateUrl: './taskplaner.component.html',
    styleUrls: ['./taskplaner.component.scss']
})
export class TaskplanerComponent implements OnInit {
    tasks: Task[];

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.store.select('taskplaner').subscribe(taskplaner => {
            this.tasks = taskplaner.tasks;
        });
        this.store.dispatch(fromTaskplaner.loadTasks());
    }

    get openTasks(): Task[] {
        return this.tasks.filter(task => task.status === 'open');
    }

    get progressTasks(): Task[] {
        return this.tasks.filter(task => task.status === 'in progress');
    }

    get doneTasks(): Task[] {
        return this.tasks.filter(task => task.status === 'done');
    }
}
