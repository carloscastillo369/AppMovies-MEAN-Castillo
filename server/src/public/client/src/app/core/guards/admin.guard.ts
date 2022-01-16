import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private _authService: AuthService, 
    private router: Router
  ) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(this._authService.isLogged()){
      const token: any = this._authService.getToken();
      const decodeToken: any = decode(token);
      const isAdmin = decodeToken.isadmin;
      const expectedRole = route.data.expectedRole
      
      if(isAdmin !== expectedRole){
        this.router.navigate(['/public'])
        return false;
      }

      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
