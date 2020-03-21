import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromTaskplaner from '../taskplaner/store/taskplaner.reducer';

export interface AppState {
    taskplaner: fromTaskplaner.TaskplanerState;
}

export const appReducer: ActionReducerMap<AppState> = {
    taskplaner: fromTaskplaner.taskPlanerReducer
};
