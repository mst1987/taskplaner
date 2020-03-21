import * as TaskPlanerActions from './taskplaner.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Task } from '../models/task.model';

export interface TaskplanerState {
    tasks: Task[];
}

const initialState: TaskplanerState = {
    tasks: []
};

export const taskPlanerReducer = createReducer(
    initialState,
    on(TaskPlanerActions.createTaskSuccess, (state, { task }) => {
        const taskList = [...state.tasks];
        taskList.push(task);
        return { ...state, tasks: taskList };
    }),
    on(TaskPlanerActions.createTasksSuccess, (state, { tasks }) => {
        const taskList = [...state.tasks];
        const newTasklist = taskList.concat(tasks);
        return { ...state, tasks: newTasklist };
    }),
    on(TaskPlanerActions.deleteTaskSuccess, (state, { task }) => {
        const taskList = [...state.tasks];
        const index = taskList.findIndex(t => t._id === task._id);
        taskList.splice(index, 1);
        return { ...state, tasks: taskList };
    }),
    on(TaskPlanerActions.deleteTasksSuccess, (state, { tasks }) => {
        const newTasklist = [...state.tasks];
        tasks.forEach(task => {
            const index = newTasklist.findIndex(t => t._id === task._id);
            newTasklist.splice(index, 1);
        });
        return { ...state, tasks: newTasklist };
    }),
    on(TaskPlanerActions.updateTaskSuccess, (state, { task }) => {
        const index = state.tasks.findIndex((t: Task) => t._id === task._id);
        const updatedTask = task;
        const updatedTasks = [...state.tasks];

        updatedTasks[index] = updatedTask;
        return {
            ...state,
            tasks: updatedTasks
        };
    }),
    on(TaskPlanerActions.loadTasksSuccess, (state, { tasks }) => ({
        ...state,
        tasks
    }))
);
