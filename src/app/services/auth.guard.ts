import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthenticationService,private router: Router,) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.authService.isLoggedIn;
      if (currentUser) {
          // authorised so return true
          console.log('Current user'+currentUser);
          return true;
      }
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login']);
      return false;
  }
  
}
