import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor(private snackbar: MatSnackBar) {}
    handleError(response: any) {
        console.log(response);
    }
}
