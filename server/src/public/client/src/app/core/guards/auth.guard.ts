import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(): boolean {
    if(this._authService.isLogged()){
      const token: any = this._authService.getToken();
      const decodeToken: any = decode(token);
      const isAdmin = decodeToken.isadmin;

      this.router.navigate(isAdmin? ['/admin'] : ['/public']);
      return false;
    }

    return true;
  }
}
