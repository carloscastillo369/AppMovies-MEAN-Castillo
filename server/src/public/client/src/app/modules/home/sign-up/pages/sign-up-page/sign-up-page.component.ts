import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/services/auth.service';

import { PasswordErrorMatcher, PasswordValidator } from 'src/app/shared/validators/passwordValidators';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { NewUserModel } from 'src/app/core/models/newuser.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  public hide1: boolean = true;
  public hide2: boolean = true;

  patternLetters = /^[a-zA-Z ñ]+$/;
  patternEmail = /^[0-9a-zA-Z._-]+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
  patternPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,15}$/;

  errorMatcher = new PasswordErrorMatcher();

  duration: number = 2;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(
    private fb:FormBuilder, 
    private _authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  formSignUp:FormGroup = this.fb.group({
    name: ['',
      [
        Validators.required,
        Validators.minLength(3), 
        Validators.maxLength(20), 
        Validators.pattern(this.patternLetters)
      ]],
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
      ]],
    confirmPassword: ['', [Validators.required]],
    address: ['', [Validators.required]],
    phone: ['', 
      [
        Validators.required,
        Validators.min(111111111), 
        Validators.max(999999999)      
      ]],
    isadmin: [false],
    checkbox: ['', [Validators.requiredTrue]]
  }, {validators: PasswordValidator})

  isValidField (field:string){
    return this.formSignUp.get(field)?.valid;
  }

  isInvalidField (field:string) {
    if( field == 'confirmPassword' ){
      return  this.formSignUp.errors?.misMatch;
    } else {
        return (
          this.formSignUp.get(field)?.invalid && 
          (this.formSignUp.get(field)?.dirty || this.formSignUp.get(field)?.touched)
        )
    }
  }

  resetForm(){
    this.formSignUp.reset();
  }

  signUp(){
    const newUser: NewUserModel = {
      id: '',
      name: this.formSignUp.value.name,
      email: this.formSignUp.value.email,
      password: this.formSignUp.value.password,
      address: this.formSignUp.value.address,
      phone: this.formSignUp.value.phone,
      isadmin: this.formSignUp.value.isadmin
    }

    if(this.formSignUp.valid){
      this._authService.signUp(newUser)
      .subscribe((res:any) => {
        if(res.dataUser) {
          let token = res.dataUser.token;
          this._authService.setToken(token);
          this.snackBar.openFromComponent( SnackBarComponent, {
            data: "Usuario registrado con éxito!",
            duration: this.duration*1000,
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
            panelClass: 'success'
          });
          this.resetForm();
          this.router.navigate(['/movies'])
        } else {
            this.snackBar.openFromComponent( SnackBarComponent, {
              data: `${res.message}`,
              duration: this.duration*1000,
              verticalPosition: this.verticalPosition,
              horizontalPosition: this.horizontalPosition,
              panelClass: 'error'
            })
          }
      });
    }
  }

  getErrorMessage (field:string) {
    let message;

    if( field == 'confirmPassword' ){
      message = this.formSignUp.errors?.misMatch? 'Las contraseñas no coinciden' : null;
    } 
    
    else {
      if (this.formSignUp.get(field)?.errors?.required) {
        switch(field) {
          case 'name':
            message = 'Por favor, ingrese su nombre.';
            break;
          case 'email':
            message = 'Por favor, ingrese su dirección de correo electrónico.';
            break;
          case 'password':
            message = 'Por favor, ingrese su contraseña.';
            break;
          case 'address':
            message = 'Por favor, ingrese su dirección.';
            break;
          case 'phone':
            message = 'Por favor, ingrese su teléfono.';
            break;
          case 'checkbox':
            message = 'Debe aceptar los términos y condiciones.';
            break;
        }
      } 
      
      if (this.formSignUp.get(field)?.errors?.pattern) {
        switch(field) {
          case 'name':
            message = 'Formato incorrecto, ingrese solo letras';
            break;
          case 'email':
            message = 'Por favor, ingrese una dirección de correo electrónico válida (p.e. someone@example.com).';
            break;
          case 'password':
            message = 'Para mayor seguridad el password debe estar formado por letras mayúsculas, minúsculas y números';
            break;
        }  
      }
      
      if (this.formSignUp.get(field)?.hasError('minlength')) {
        const minLength = this.formSignUp.get(field)?.errors?.minlength.requiredLength;
        message = `Ingrese mínimo ${minLength} caracteres`;
      } 
      
      if (this.formSignUp.get(field)?.hasError('maxlength')) {
        const maxLength = this.formSignUp.get(field)?.errors?.maxlength.requiredLength;
        message = `Ingrese máximo ${maxLength} caracteres`;
      } 
      
      if (this.formSignUp.get(field)?.hasError('min') || this.formSignUp.get(field)?.hasError('max')) {
        message = 'Ingrese un número de 9 dígitos.';
      }   
    }
    return message; 
  }

}
