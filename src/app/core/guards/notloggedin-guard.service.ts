import { AuthService } from './../services/auth.service';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotloggedinGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (!this.authService.isLoggedIn()) { return true; }
    this.router.navigate(['/']);
    return false;
  }
}
