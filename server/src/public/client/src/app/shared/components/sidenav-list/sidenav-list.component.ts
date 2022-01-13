import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataUserModel } from 'src/app/core/models/datauser.model';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  public user!: DataUserModel;
 
  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
    this.getDataUser();
  }

  onSidenavClose(){
    this.sidenavClose.emit();
  }

  logOut(){
    this._authService.signOut();
    this.onSidenavClose();
  }

  getDataUser(){
    this._authService.getDataUser().subscribe(res => {
      this.user = res.user;
    })
  }
}
