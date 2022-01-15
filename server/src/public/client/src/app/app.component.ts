import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  public isLogged!: boolean;
  public user: any;

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
