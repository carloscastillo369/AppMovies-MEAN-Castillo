import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersInterceptorService implements HttpInterceptor {

  constructor(private _authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let req = request;
    let token = this._authService.getToken()
    if(token) {
      req = request.clone({
        setHeaders: {
          'access-token' : token
        }
      })
    }
    
    return next.handle(req);

  }
}
