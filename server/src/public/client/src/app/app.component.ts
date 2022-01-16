import { Component, OnInit } from '@angular/core';

import { DataUserModel } from './core/models/datauser.model';

import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  public isLogged!: boolean;
  public user!: DataUserModel;

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
    this.isLogged = this._authService.isLogged();
    this.getDataUser();
  }

  getDataUser(){
    this._authService.getDataUser().subscribe(res => {
      this.user = res.user;
    })
  }

}
