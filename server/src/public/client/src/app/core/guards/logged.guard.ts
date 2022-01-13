import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(private _authService: AuthService) {}
  
  canActivate(): boolean {
    let isLogged = this._authService.isLogged();
    if(!isLogged) {
        this._authService.signOut();
    }
    
    return isLogged;
  }
}
