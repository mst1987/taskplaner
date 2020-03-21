import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromTaskplaner from '../../store/taskplaner.actions';
import { TaskplanerService } from '../../services/taskplaner.service';
import {
    FormGroup,
    FormBuilder,
    Validators,
    AbstractControl
} from '@angular/forms';
import { Task } from '../../models/task.model';

const defaultTask: Task = {
    name: '',
    duration: 1,
    status: 'open',
    description: '1'
};

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
    addTaskForm: FormGroup;

    constructor(private store: Store<AppState>, private fb: FormBuilder) {
        this.addTaskForm = fb.group({
            name: fb.control('', [Validators.required])
        });
    }

    ngOnInit() {}

    get name(): AbstractControl {
        return this.addTaskForm.get('name');
    }

    onSubmit() {
        const task: Task = {
            ...defaultTask,
            name: this.addTaskForm.value.name
        };
        this.store.dispatch(fromTaskplaner.createTask({ task }));
    }
}
