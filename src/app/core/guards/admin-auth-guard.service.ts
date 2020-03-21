import { AuthService } from './../services/auth.service';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.UserRights;

    if (user && user.isAdmin) {
      return true;
    }

    for (const permission of route.data.permission) {
      if (user[permission] && user[permission].isAdmin === true) {
        return true;
      }
    }

    this.router.navigate(['/no-access']);
    return false;
  }
}
