import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {

  constructor(private _authService: AuthService,  private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token: any = this._authService.getToken();
    const decodeToken: any = decode(token);
    const isAdmin = decodeToken.isadmin;

    const expectedRole = route.data.expectedRole
    
    if(isAdmin !== expectedRole){
      this.router.navigate(['/admin'])
      return false;
    }
    
    return true;
  }
}
