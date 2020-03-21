import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TaskplanerService } from '../services/taskplaner.service';
import * as fromTaskplanerActions from './taskplaner.actions';
import { Task } from '../models/task.model';

@Injectable()
export class TaskplanerEffects {
    constructor(
        private actions$: Actions,
        private taskplanerService: TaskplanerService
    ) {}

    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTaskplanerActions.loadTasks),
            mergeMap(() =>
                this.taskplanerService.getTasks().pipe(
                    map((tasks: Task[]) =>
                        fromTaskplanerActions.loadTasksSuccess({ tasks })
                    ),
                    catchError(error =>
                        of(fromTaskplanerActions.loadTasksError({ error }))
                    )
                )
            )
        )
    );

    createTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTaskplanerActions.createTask),
            mergeMap(action =>
                this.taskplanerService.addTask(action.task).pipe(
                    map((task: Task) =>
                        fromTaskplanerActions.createTaskSuccess({ task })
                    ),
                    catchError(error =>
                        of(fromTaskplanerActions.loadTaskError({ error }))
                    )
                )
            )
        )
    );

    deleteTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTaskplanerActions.deleteTask),
            mergeMap(action =>
                this.taskplanerService.deleteTask(action.task).pipe(
                    map((task: Task) =>
                        fromTaskplanerActions.deleteTaskSuccess({ task })
                    ),
                    catchError(error =>
                        of(fromTaskplanerActions.deleteTaskError({ error }))
                    )
                )
            )
        )
    );

    updateTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromTaskplanerActions.updateTask),
            mergeMap(action => {
                console.log(action.task);
                return this.taskplanerService.updateTask(action.task).pipe(
                    map((task: Task) => {
                        console.log(task);
                        return fromTaskplanerActions.updateTaskSuccess({
                            task
                        });
                    }),
                    catchError(error => {
                        return of(
                            fromTaskplanerActions.updateTaskError({ error })
                        );
                    })
                );
            })
        )
    );

    handleTask(task): Task {
        return {
            _id: task._id,
            name: task.name,
            status: task.status,
            description: task.description,
            duration: task.duration
        };
    }
}
