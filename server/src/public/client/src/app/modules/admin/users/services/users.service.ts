import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUserModel } from 'src/app/core/models/newuser.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlAPI = "https://61bd6cde2a1dd4001708a047.mockapi.io/api/users/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<NewUserModel[]>{
    return this.http.get<NewUserModel[]>(this.urlAPI);
  }

  deleteUser(id: string){
    return this.http.delete<NewUserModel>(this.urlAPI + id);
  }
}
