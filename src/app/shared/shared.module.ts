import { NgModule, ErrorHandler } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {
    OpenTasksPipe,
    DoneTasksPipe,
    ProgressTasksPipe
} from './pipes/task.pipes';

@NgModule({
    declarations: [OpenTasksPipe, DoneTasksPipe, ProgressTasksPipe],
    imports: [HttpClientModule, MatSnackBarModule],
    exports: [OpenTasksPipe, DoneTasksPipe, ProgressTasksPipe],
    providers: [MatSnackBar]
})
export class SharedModule {}
