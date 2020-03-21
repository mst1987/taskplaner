import {
    FormGroup,
    FormBuilder,
    Validators,
    AbstractControl
} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import * as fromTaskplaner from '../../store/taskplaner.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    @Input()
    task: Task;
    editTaskForm: FormGroup;
    display = false;

    constructor(private store: Store<AppState>, private fb: FormBuilder) {}

    ngOnInit() {
        this.editTaskForm = this.fb.group({
            name: this.fb.control(
                { value: this.task.name, disabled: this.editable },
                [Validators.required]
            ),
            description: this.fb.control(
                { value: this.task.description, disabled: this.editable },
                []
            )
        });
    }

    public toggleEditable() {
        if (this.editable) {
            this.editTaskForm.get('name').disable();
            this.editTaskForm.get('description').disable();
        } else {
            this.editTaskForm.get('name').enable();
            this.editTaskForm.get('description').enable();
        }
    }

    get editable() {
        if (this.editTaskForm) {
            return this.editTaskForm.get('name').enabled;
        }
        return true;
    }

    public showDetails() {
        this.display = !this.display;
    }

    get isOpen() {
        return this.task.status === 'open';
    }

    get isInProgress() {
        return this.task.status === 'in progress';
    }

    get isDone() {
        return this.task.status === 'done';
    }

    public updateTask() {
        const task: Task = {
            ...this.task,
            name: this.editTaskForm.value.name,
            description: this.editTaskForm.value.description
        };
        this.store.dispatch(fromTaskplaner.updateTask({ task }));
        console.log(this.editTaskForm.value.description);
        this.toggleEditable();
    }

    get name(): AbstractControl {
        return this.editTaskForm.get('name');
    }

    public startTask() {
        this.task.status = 'in progress';
        this.store.dispatch(fromTaskplaner.updateTask({ task: this.task }));
    }

    public finishTask() {
        this.task.status = 'done';
        this.store.dispatch(fromTaskplaner.updateTask({ task: this.task }));
    }

    public deleteTask() {
        this.store.dispatch(fromTaskplaner.deleteTask({ task: this.task }));
    }
}
