import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const username = this.authService.username;
    if (username) {
      return true;
    }
    this.authService.redirectUrl = state.url;
    this.router.navigate([{ outlets: { primary: ['login'], popup: null }}]);
    return false;
  }
}
