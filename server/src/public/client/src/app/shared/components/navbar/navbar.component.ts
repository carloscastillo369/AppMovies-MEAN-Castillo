import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataUserModel } from 'src/app/core/models/datauser.model';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter;
  
  public user!: DataUserModel;
  
  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
    this.getDataUser();
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  logOut(){
    this._authService.signOut();
  }

  getDataUser(){
    this._authService.getDataUser().subscribe(res => {
      this.user = res.user;
    })
  }

}
