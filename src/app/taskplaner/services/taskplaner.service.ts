import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';
import { API_URL } from '../../../config/variables';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskplanerService extends DataService {
    constructor(http: HttpClient, router: Router) {
        super(http, router, API_URL + 'task');
    }

    public getTasks(): Observable<Task[] | object> {
        return super.getAll();
    }

    public addTask(task: Task): Observable<Task | object> {
        return super.create(task);
    }

    public updateTask(task: Task): Observable<Task | object> {
        return super.update(task);
    }

    public deleteTask(task: Task): Observable<Task | object> {
        return super.delete(task._id);
    }
}
