import { NotFoundError } from './../error/not-found';
import { AppError } from './../error/app-error';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BadInputError } from '../error/bad-input';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(
        private http: HttpClient,
        private router: Router,
        private url: string
    ) {}

    public create(resource: object): Observable<object> {
        return this.http
            .post(this.url, resource)
            .pipe(catchError(this.handleError));
    }

    public delete(id: number): Observable<object> {
        return this.http
            .delete(this.url + '/' + id)
            .pipe(catchError(this.handleError));
    }

    public update(resource: object): Observable<object> {
        return this.http
            .put(this.url, resource)
            .pipe(catchError(this.handleError));
    }

    public getAll(): Observable<object[] | object> {
        return this.http.get(this.url).pipe(catchError(this.handleError));
    }

    private handleError(error: Response): Observable<AppError> {
        switch (error.status) {
            case 400:
                return throwError(new BadInputError(error));
            case 404:
                return throwError(new NotFoundError(error));
            default:
                return throwError(new AppError(error));
        }
    }
}
