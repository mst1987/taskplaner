import { UserRight } from './../interfaces/userdata';
import { UserData } from '../interfaces/userdata';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignInInterface } from '../interfaces/auth.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/';
    currentUser: { isAdmin: boolean } = { isAdmin: true };

    constructor(private http: HttpClient, private router: Router) {}

    isLoggedIn() {
        return localStorage.getItem('token') ? true : false;
    }

    get Userdata(): UserData {
        // const headers = new HttpHeaders().set('x-auth-token', localStorage.getItem('token'));
        const token = localStorage.getItem('token');

        if (!token) {
            return null;
        }

        return new JwtHelperService().decodeToken(token);
    }

    get UserRights(): UserRight {
        const token = localStorage.getItem('token');

        if (!token) {
            return null;
        }

        const decodedToken: UserData = new JwtHelperService().decodeToken(
            token
        );

        return decodedToken.userRight;
    }

    get hasAdminRights(): boolean {
        if (this.UserRights.isAdmin) {
            return true;
        }

        let hasAdmin = false;
        Object.values(this.UserRights).map(rights => {
            if (rights.isAdmin) {
                hasAdmin = true;
            }
        });

        return hasAdmin;
    }

    login(credentials: SignInInterface): Observable<boolean> {
        return this.http
            .post<{ token: string }>(this.apiUrl + 'api/auth', credentials)
            .pipe(
                map(response => {
                    if (response && response.token) {
                        localStorage.setItem('token', response.token);
                        return true;
                    }

                    return false;
                })
            );
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }
}
