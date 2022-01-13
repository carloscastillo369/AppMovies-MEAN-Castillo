import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersInterceptorService } from './services/users.interceptor.service';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { PublicModule } from './modules/public/home/public.module';
import { AdminModule } from './modules/admin/home/admin.module';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    PublicModule,
    AdminModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UsersInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
