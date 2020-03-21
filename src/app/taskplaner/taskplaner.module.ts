import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskplanerRoutingModule } from './taskplaner-routing.module';
import { TaskplanerComponent } from './taskplaner.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { FormBuilder } from '@angular/forms';
import { TaskComponent } from './components/task/task.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EffectsModule } from '@ngrx/effects';
import { TaskplanerEffects } from './store/taskplaner.effects';

import { SharedModule } from '../shared/shared.module';
@NgModule({
    providers: [FormBuilder, MatSnackBar],
    declarations: [
        TaskplanerComponent,
        AddTaskComponent,
        EditTaskComponent,
        TaskComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TaskplanerRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        EffectsModule.forFeature([TaskplanerEffects])
    ]
})
export class TaskplanerModule {}
