import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const loadTask = createAction('[Task] Load Task Start');
export const loadTaskSuccess = createAction(
    '[Task] Load Task Success',
    props<{ task: Task }>()
);
export const loadTaskError = createAction(
    '[Task] Load Task Error',
    props<{ error }>()
);

/**
 * load multiple Tasks
 */
export const loadTasks = createAction('[Task] Load Tasks Start');
export const loadTasksSuccess = createAction(
    '[Task] Load Tasks Success',
    props<{ tasks: Task[] }>()
);
export const loadTasksError = createAction(
    '[Task] Load Tasks Error',
    props<{ error }>()
);

/**
 * edit Task
 */
export const updateTask = createAction(
    '[Task] Update Task Start',
    props<{ task: Task }>()
);
export const updateTaskSuccess = createAction(
    '[Task] Update Task Success',
    props<{ task: Task }>()
);
export const updateTaskError = createAction(
    '[Task] Update Task Error',
    error => error
);

/**
 * Edit multiple Tasks
 */
export const updateTasks = createAction(
    '[Task] Update Tasks Start',
    props<{ tasks: Task[] }>()
);
export const updateTasksSuccess = createAction(
    '[Task] Update Tasks Success',
    props<{ tasks: Task[] }>()
);
export const updateTasksError = createAction('[Task] Update Tasks Error');

/**
 * delete Task
 */
export const deleteTask = createAction(
    '[Task] Delete Task Start',
    props<{ task: Task }>()
);
export const deleteTaskSuccess = createAction(
    '[Task] Delete Task Success',
    props<{ task: Task }>()
);
export const deleteTaskError = createAction(
    '[Task] Delete Task Error',
    props<{ error }>()
);

/**
 * delete multiple Tasks
 */

export const deleteTasks = createAction(
    '[Task] Delete Tasks Start',
    props<{ tasks: Task[] }>()
);
export const deleteTasksSuccess = createAction(
    '[Task] Delete Tasks Success',
    props<{ tasks: Task[] }>()
);
export const deleteTasksError = createAction(
    '[Task] Delete Tasks Error',
    props<{ tasks: Task[] }>()
);

/**
 * create Task
 */
export const createTask = createAction(
    '[Task] Create Task Start',
    props<{ task: Task }>()
);
export const createTaskError = createAction('[Task] Create Task Error');
export const createTaskSuccess = createAction(
    '[Task] Create Task Success',
    props<{ task: Task }>()
);

/**
 * create multiple Tasks
 */
export const createTasks = createAction(
    '[Task] Create Tasks Start',
    props<{ tasks: Task[] }>()
);
export const createTasksSuccess = createAction(
    '[Task] Create Tasks Success',
    props<{ tasks: Task[] }>()
);
export const createTasksError = createAction(
    '[Task] Create Tasks Error',
    error => error
);
