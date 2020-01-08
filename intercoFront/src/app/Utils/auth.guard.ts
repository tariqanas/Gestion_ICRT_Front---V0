import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/Authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router , private auth : AuthService) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    
    if( !!localStorage.getItem("logged")) {
      return true;
    }
     //Couldn't login so i redirect.
    this.router.navigate(['/login']);
        return false;
  }

 

  
  
}
