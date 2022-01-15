import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(): boolean {
    let isLogged = this._authService.isLogged();
    if(isLogged) {
        this.router.navigate(['/public']);
    }
    
    return !isLogged;
  }
}
