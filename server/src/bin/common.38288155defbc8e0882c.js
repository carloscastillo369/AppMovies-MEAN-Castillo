"use strict";(self.webpackChunkappmovies=self.webpackChunkappmovies||[]).push([[592],{3062:(u,c,l)=>{l.d(c,{l:()=>s});var t=l(2340),i=l(7716),_=l(1841);let s=(()=>{class a{constructor(o){this.http=o,this.URL_BASE=t.N.production?"":"http://localhost:8080",this.urlAPI=this.URL_BASE+"/api/products/"}getMovie(o){return this.http.get(this.urlAPI+(o||""))}saveMovie(o){return this.http.post(this.urlAPI,o)}updateMovie(o,p){return this.http.put(this.urlAPI+p,o)}deleteMovie(o){return this.http.delete(this.urlAPI+o)}}return a.\u0275fac=function(o){return new(o||a)(i.LFG(_.eN))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},8132:(u,c,l)=>{l.d(c,{p:()=>s});var t=l(2340),i=l(7716),_=l(1841);let s=(()=>{class a{constructor(o){this.http=o,this.URL_BASE=t.N.production?"":"http://localhost:8080",this.urlAPI=this.URL_BASE+"/api/orders/"}getOrder(o){return this.http.get(this.urlAPI+(o||""))}saveOrder(o,p){return this.http.post(this.urlAPI,{user:o,order:p})}}return a.\u0275fac=function(o){return new(o||a)(i.LFG(_.eN))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},5244:(u,c,l)=>{l.d(c,{U:()=>x});var t=l(7716),i=l(2789);function _(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1," No. "),t.qZA())}function s(e,n){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const r=n.$implicit,m=t.oxw();t.xp6(1),t.hij(" ",m.orders.indexOf(r)+1," ")}}function a(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1," Descripci\xf3n "),t.qZA())}function d(e,n){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const r=n.$implicit;t.xp6(1),t.hij(" ",r.title,"")}}function o(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1," Tipo "),t.qZA())}function p(e,n){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const r=n.$implicit;t.xp6(1),t.hij(" ",r.type," ")}}function h(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1," Cantidad "),t.qZA())}function f(e,n){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const r=n.$implicit;t.xp6(1),t.hij(" ",r.quantity," ")}}function T(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1," Precio "),t.qZA())}function C(e,n){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const r=n.$implicit;t.xp6(1),t.Oqu(r.price.toFixed(2))}}function O(e,n){1&e&&(t.TgZ(0,"th",14),t._uU(1," Sub-Total "),t.qZA())}function g(e,n){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const r=n.$implicit;t.xp6(1),t.Oqu((r.price*r.quantity).toFixed(2))}}function v(e,n){1&e&&t._UZ(0,"tr",18)}function A(e,n){1&e&&t._UZ(0,"tr",19)}let x=(()=>{class e{constructor(){this.displayedColumns=["posicion","descripcion","tipo","cantidad","precio","subtotal"]}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-orders-table"]],inputs:{orders:"orders"},decls:22,vars:3,consts:[[1,"table-container"],["mat-table","",1,"table-content",3,"dataSource"],["matColumnDef","posicion"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","tipo"],["class","cell-center","mat-cell","",4,"matCellDef"],["matColumnDef","cantidad"],["matColumnDef","precio"],["class","cell-right","mat-cell","",4,"matCellDef"],["matColumnDef","subtotal"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"cell-center"],["mat-cell","",1,"cell-right"],["mat-header-row",""],["mat-row",""]],template:function(r,m){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"table",1),t.ynx(2,2),t.YNc(3,_,2,0,"th",3),t.YNc(4,s,2,1,"td",4),t.BQk(),t.ynx(5,5),t.YNc(6,a,2,0,"th",3),t.YNc(7,d,2,1,"td",4),t.BQk(),t.ynx(8,6),t.YNc(9,o,2,0,"th",3),t.YNc(10,p,2,1,"td",7),t.BQk(),t.ynx(11,8),t.YNc(12,h,2,0,"th",3),t.YNc(13,f,2,1,"td",7),t.BQk(),t.ynx(14,9),t.YNc(15,T,2,0,"th",3),t.YNc(16,C,2,1,"td",10),t.BQk(),t.ynx(17,11),t.YNc(18,O,2,0,"th",3),t.YNc(19,g,2,1,"td",10),t.BQk(),t.YNc(20,v,1,0,"tr",12),t.YNc(21,A,1,0,"tr",13),t.qZA(),t.qZA()),2&r&&(t.xp6(1),t.Q6J("dataSource",m.orders),t.xp6(19),t.Q6J("matHeaderRowDef",m.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",m.displayedColumns))},directives:[i.BZ,i.w1,i.fO,i.Dz,i.as,i.nj,i.ge,i.ev,i.XQ,i.Gk],styles:[".table-container[_ngcontent-%COMP%]{width:100%;overflow-x:scroll}.table-content[_ngcontent-%COMP%]{min-width:580px;margin-bottom:20px}.mat-header-cell[_ngcontent-%COMP%]{text-align:center;font-weight:bold}.cell-right[_ngcontent-%COMP%]{text-align:right}.cell-center[_ngcontent-%COMP%]{text-transform:capitalize;text-align:center}@media (min-width: 600px){.table-container[_ngcontent-%COMP%]{overflow-x:auto}.table-content[_ngcontent-%COMP%]{width:100%}}"]}),e})()}}]);