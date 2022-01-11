import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { UsersPageComponent } from './pages/users-page/users-page.component';


@NgModule({
  declarations: [
    UsersPageComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
