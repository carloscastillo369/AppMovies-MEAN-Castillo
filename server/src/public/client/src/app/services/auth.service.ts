import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NewUserModel } from 'src/app/core/models/newuser.model';
import { UserRegisteredModel } from 'src/app/core/models/user-registered.model';

import { environment } from 'src/environments/environment';
import { DataUserModel } from '../core/models/datauser.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_BASE: string = !environment.production? 'http://localhost:8080' : '';

  private urlAPI = this.URL_BASE + '/api/users/';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: NewUserModel){
    return this.http.post<NewUserModel>(this.urlAPI + '/signup', user);
  }

  signIn(user: UserRegisteredModel){
    return this.http.post<UserRegisteredModel>(this.urlAPI + '/signin', user);
  }

  signOut() {
    this.removeToken();
    this.router.navigate(['/'])
    .then(() => {
      window.location.reload()
    });
  }

  getDataUser(){
    return this.http.get<any>(this.urlAPI + '/getdata');
  }

  isLogged() {
    return !!localStorage.getItem('ACCESS_TOKEN');
  }

  setToken(token:any) {
    localStorage.setItem('ACCESS_TOKEN', token);
  }

  getToken() {
    return localStorage.getItem('ACCESS_TOKEN');
  }

  private removeToken() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
