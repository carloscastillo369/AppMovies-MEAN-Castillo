import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/services/auth.service';

import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { UserRegisteredModel } from 'src/app/core/models/user-registered.model';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  public hide: boolean = true;

  patternEmail = /^[0-9a-zA-Z._-]+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
  patternPassword = /^[0-9a-zA-Zñ]+$/;
  
  duration: number = 2;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(
    private fb:FormBuilder,
    private _authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  formSignIn: FormGroup = this.fb.group({
    email: ['',
      [
        Validators.required,
        Validators.pattern(this.patternEmail)
      ]],
    password: ['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15), 
        Validators.pattern(this.patternPassword)
      ]]
  }) 
  
  isValidField (field:string){
    return this.formSignIn.get(field)?.valid;
  }

  isInvalidField (field:string) {
    return (
      this.formSignIn.get(field)?.invalid && 
      (this.formSignIn.get(field)?.dirty || this.formSignIn.get(field)?.touched)
    )
  }

  resetForm(){
    this.formSignIn.reset();
  }

  signIn(){
    const user: UserRegisteredModel = {
      email: this.formSignIn.value.email,
      password: this.formSignIn.value.password
    }
    
    if(this.formSignIn.valid){
      this._authService.signIn(user)
      .subscribe((res:any) => { 
        if(res.dataUser) {
          let token = res.dataUser.token;
          this._authService.setToken(token);
          this.snackBar.openFromComponent( SnackBarComponent, {
            data: `Bienvenido: ${res.dataUser.name}!`,
            duration: this.duration*1000,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
            panelClass: 'success'
          });
          this.resetForm();
          let isAdmin = res.dataUser.isadmin;
          this.router.navigate(isAdmin? ['/admin/list'] : ['/public/movies']);
        }
        else {
          this.snackBar.openFromComponent( SnackBarComponent, {
            data: `${res.message}`,
            duration: this.duration*1000,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,  
            panelClass: 'error'
          })
        }
      })
    }
  }

  getErrorMessage (field:string) {
    let message;

    if (this.formSignIn.get(field)?.errors?.required) {
      switch(field) {
        case 'email':
          message = 'Por favor, ingrese su dirección de correo electrónico.';
          break;
        case 'password':
          message = 'Por favor, ingrese su contraseña.';
          break;
      }
    } else if (this.formSignIn.get(field)?.errors?.pattern) {
      switch(field) {
        case 'email':
          message = 'Por favor, ingrese una dirección de correo electrónico válida (p.e. someone@example.com).';
          break;
        case 'password':
          message = 'Formato incorrecto, ingrese solo letras y números.';
          break;
      }
    } else if (this.formSignIn.get(field)?.hasError('minlength')) {
      const minLength = this.formSignIn.get(field)?.errors?.minlength.requiredLength;
      message = `La contraseña debe tener mínimo ${minLength} caracteres`
    } else if (this.formSignIn.get(field)?.hasError('maxlength')) {
      const maxLength = this.formSignIn.get(field)?.errors?.maxlength.requiredLength;
      message = `La contraseña no debe exceder más de ${maxLength} caracteres`
    } 

    return message;
  }

}
