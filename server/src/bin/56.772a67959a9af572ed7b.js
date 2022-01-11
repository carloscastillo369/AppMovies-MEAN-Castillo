"use strict";(self.webpackChunkappmovies=self.webpackChunkappmovies||[]).push([[56],{6541:(O,b,s)=>{s.r(b),s.d(b,{SignUpModule:()=>j});var S=s(8583),u=s(4655),n=s(3679);function P(o){const r=o.get("password"),i=o.get("confirmPassword");return(null==r?void 0:r.pristine)||(null==i?void 0:i.pristine)?null:r&&i&&r.value!==i.value?{misMatch:!0}:null}class w{isErrorState(r,i){const t=null==i?void 0:i.control.get("password"),a=null==i?void 0:i.control.get("confirmPassword");return!(!(null==r?void 0:r.dirty)||(null==t?void 0:t.value)===(null==a?void 0:a.value))}}var x=s(8109),e=s(7716),k=s(1841);let I=(()=>{class o{constructor(i){this.http=i,this.urlAPI="https://61bd6cde2a1dd4001708a047.mockapi.io/api/users/"}saveUser(i){return this.http.post(this.urlAPI,i)}}return o.\u0275fac=function(i){return new(i||o)(e.LFG(k.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var T=s(7001),p=s(8295),A=s(9983),_=s(1095),C=s(6627);function F(o,r){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij(" ",i.getErrorMessage("name")," ")}}function M(o,r){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij(" ",i.getErrorMessage("email")," ")}}function y(o,r){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij(" ",i.getErrorMessage("password")," ")}}function q(o,r){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij(" ",i.getErrorMessage("confirmPassword")," ")}}function J(o,r){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij(" ",i.getErrorMessage("checkbox")," ")}}const E=[{path:"",component:(()=>{class o{constructor(i,t,a){this.fb=i,this._registerService=t,this.snackBar=a,this.hide1=!0,this.hide2=!0,this.patternLetters=/^[a-zA-Z \xf1]+$/,this.patternEmail=/^[0-9a-zA-Z._-]+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/,this.patternPassword=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,15}$/,this.errorMatcher=new w,this.duration=3,this.verticalPosition="top",this.horizontalPosition="center",this.formSignUp=this.fb.group({name:["",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(20),n.kI.pattern(this.patternLetters)]],email:["",[n.kI.required,n.kI.pattern(this.patternEmail)]],password:["",[n.kI.required,n.kI.minLength(6),n.kI.maxLength(15),n.kI.pattern(this.patternPassword)]],confirmPassword:["",[n.kI.required]],checkbox:["",[n.kI.requiredTrue]]},{validators:P})}ngOnInit(){}isValidField(i){var t;return null===(t=this.formSignUp.get(i))||void 0===t?void 0:t.valid}isInvalidField(i){var t,a,m,d;return"confirmPassword"==i?null===(t=this.formSignUp.errors)||void 0===t?void 0:t.misMatch:(null===(a=this.formSignUp.get(i))||void 0===a?void 0:a.invalid)&&((null===(m=this.formSignUp.get(i))||void 0===m?void 0:m.dirty)||(null===(d=this.formSignUp.get(i))||void 0===d?void 0:d.touched))}onResetForm(){this.formSignUp.reset()}onSaveForm(){this.formSignUp.valid&&(this._registerService.saveUser({id:"",name:this.formSignUp.value.name,email:this.formSignUp.value.email,password:this.formSignUp.value.password}).subscribe(t=>{this.snackBar.openFromComponent(x.E,{data:"Usuario registrado con \xe9xito!",duration:1e3*this.duration,verticalPosition:this.verticalPosition,horizontalPosition:this.horizontalPosition,panelClass:"success"})}),this.onResetForm())}getErrorMessage(i){var t,a,m,d,c,g,v,f,h,U,Z;let l;if("confirmPassword"==i)l=(null===(t=this.formSignUp.errors)||void 0===t?void 0:t.misMatch)?"Las contrase\xf1as no coinciden":null;else if(null===(m=null===(a=this.formSignUp.get(i))||void 0===a?void 0:a.errors)||void 0===m?void 0:m.required)switch(i){case"name":l="Por favor, ingrese su nombre.";break;case"email":l="Por favor, ingrese su direcci\xf3n de correo electr\xf3nico.";break;case"password":l="Por favor, ingrese su contrase\xf1a.";break;case"checkbox":l="Debe aceptar los t\xe9rminos y condiciones."}else if(null===(d=this.formSignUp.get(i))||void 0===d?void 0:d.hasError("minlength"))l=`Ingrese m\xednimo ${null===(g=null===(c=this.formSignUp.get(i))||void 0===c?void 0:c.errors)||void 0===g?void 0:g.minlength.requiredLength} caracteres`;else if(null===(v=this.formSignUp.get(i))||void 0===v?void 0:v.hasError("maxlength"))l=`Ingrese m\xe1ximo ${null===(h=null===(f=this.formSignUp.get(i))||void 0===f?void 0:f.errors)||void 0===h?void 0:h.maxlength.requiredLength} caracteres`;else if(null===(Z=null===(U=this.formSignUp.get(i))||void 0===U?void 0:U.errors)||void 0===Z?void 0:Z.pattern)switch(i){case"name":l="Formato incorrecto, ingrese solo letras";break;case"email":l="Por favor, ingrese una direcci\xf3n de correo electr\xf3nico v\xe1lida (p.e. someone@example.com).";break;case"password":l="Para mayor seguridad el password debe estar formado por letras may\xfasculas, min\xfasculas y n\xfameros"}return l}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(n.qu),e.Y36(I),e.Y36(T.ux))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-sign-up-page"]],decls:41,vars:30,consts:[[1,"sign-up-container"],[1,"sign-up-form"],[3,"formGroup","submit"],["appearance","fill"],["matInput","","type","text","autocomplete","off","formControlName","name"],[4,"ngIf"],["matInput","","type","email","autocomplete","off","placeholder","someone@example.com","formControlName","email"],["matInput","","autocomplete","off","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["matInput","","autocomplete","off","formControlName","confirmPassword",3,"type","errorStateMatcher"],["mat-icon-button","","matSuffix","",3,"click"],[1,"mb-3","form-check"],["type","checkbox","formControlName","checkbox",1,"form-check-input"],[1,"form-check-label"],["mat-raised-button","","color","warn","type","submit",1,"btn","btn-submit",3,"disabled"],[1,"signin-button-container"],["mat-raised-button","","color","primary","routerLink","/HomeMovie/signin",1,"btn"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"form",2),e.NdJ("submit",function(){return t.onSaveForm()}),e.TgZ(3,"mat-form-field",3),e.TgZ(4,"mat-label"),e._uU(5,"Nombre"),e.qZA(),e._UZ(6,"input",4),e.YNc(7,F,2,1,"mat-error",5),e.qZA(),e.TgZ(8,"mat-form-field",3),e.TgZ(9,"mat-label"),e._uU(10,"Email"),e.qZA(),e._UZ(11,"input",6),e.YNc(12,M,2,1,"mat-error",5),e.qZA(),e.TgZ(13,"mat-form-field",3),e.TgZ(14,"mat-label"),e._uU(15,"Contrase\xf1a"),e.qZA(),e._UZ(16,"input",7),e.TgZ(17,"button",8),e.NdJ("click",function(){return t.hide1=!t.hide1}),e.TgZ(18,"mat-icon"),e._uU(19),e.qZA(),e.qZA(),e.YNc(20,y,2,1,"mat-error",5),e.qZA(),e.TgZ(21,"mat-form-field",3),e.TgZ(22,"mat-label"),e._uU(23,"Confirmar contrase\xf1a"),e.qZA(),e._UZ(24,"input",9),e.TgZ(25,"button",10),e.NdJ("click",function(){return t.hide2=!t.hide2}),e.TgZ(26,"mat-icon"),e._uU(27),e.qZA(),e.qZA(),e.YNc(28,q,2,1,"mat-error",5),e.qZA(),e.TgZ(29,"div",11),e._UZ(30,"input",12),e.TgZ(31,"label",13),e._uU(32," Acepto los t\xe9rminos y condiciones "),e.qZA(),e.YNc(33,J,2,1,"mat-error",5),e.qZA(),e.TgZ(34,"button",14),e._uU(35,"Crea tu cuenta de HomeMovie"),e.qZA(),e.qZA(),e.TgZ(36,"div",15),e.TgZ(37,"p"),e._uU(38,"\xbfYa tienes una cuenta en HomeMovie?"),e.qZA(),e.TgZ(39,"button",16),e._uU(40,"Ingresa a tu cuenta de HomeMovie"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(2),e.Q6J("formGroup",t.formSignUp),e.xp6(4),e.ekj("is-valid",t.isValidField("name"))("is-invalid",t.isInvalidField("name")),e.xp6(1),e.Q6J("ngIf",t.isInvalidField("name")),e.xp6(4),e.ekj("is-valid",t.isValidField("email"))("is-invalid",t.isInvalidField("email")),e.xp6(1),e.Q6J("ngIf",t.isInvalidField("email")),e.xp6(4),e.ekj("is-valid",t.isValidField("password"))("is-invalid",t.isInvalidField("password")),e.Q6J("type",t.hide1?"password":"text"),e.xp6(3),e.Oqu(t.hide1?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",t.isInvalidField("password")),e.xp6(4),e.ekj("is-valid",t.isValidField("confirmPassword"))("is-invalid",t.isInvalidField("confirmPassword")),e.Q6J("type",t.hide2?"password":"text")("errorStateMatcher",t.errorMatcher),e.xp6(3),e.Oqu(t.hide2?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",t.isInvalidField("confirmPassword")),e.xp6(2),e.ekj("is-invalid",t.isInvalidField("checkbox")),e.xp6(3),e.Q6J("ngIf",t.isInvalidField("checkbox")),e.xp6(1),e.Q6J("disabled",t.formSignUp.invalid))},directives:[n._Y,n.JL,n.sg,p.KE,p.hX,A.Nt,n.Fj,n.JJ,n.u,S.O5,_.lW,p.R9,C.Hw,n.Wl,u.rH,p.TO],styles:[".sign-up-container[_ngcontent-%COMP%]{max-width:400px;margin:0 auto;padding:30px 5px}.sign-up-form[_ngcontent-%COMP%]{background-color:#fff;padding:30px;border-radius:10px}mat-form-field[_ngcontent-%COMP%]{width:100%;height:90px}.signin-button-container[_ngcontent-%COMP%]{color:#212529;margin-top:40px;text-align:center}.btn[_ngcontent-%COMP%]{width:100%}.btn-submit[_ngcontent-%COMP%]{margin-top:20px}"]}),o})()}];let L=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(E)],u.Bz]}),o})();var N=s(644);let j=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[S.ez,L,n.UX,N.q]]}),o})()}}]);