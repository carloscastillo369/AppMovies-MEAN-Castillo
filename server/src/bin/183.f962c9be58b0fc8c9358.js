"use strict";(self.webpackChunkappmovies=self.webpackChunkappmovies||[]).push([[183],{9183:(B,l,a)=>{a.r(l),a.d(l,{OrdersModule:()=>z});var p=a(8583),s=a(4655),t=a(7716),u=a(8132),m=a(1095),g=a(6627),c=a(5618),h=a(1769),O=a(5244);function b(e,r){if(1&e&&(t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"div",5),t.TgZ(3,"h3",6),t._uU(4,"Datos Personales:"),t.qZA(),t._UZ(5,"mat-divider"),t.TgZ(6,"p",7),t._uU(7,"Nombre: "),t.TgZ(8,"span",8),t._uU(9),t.qZA(),t.qZA(),t.TgZ(10,"p",7),t._uU(11,"Email: "),t.TgZ(12,"span",8),t._uU(13),t.qZA(),t.qZA(),t.TgZ(14,"p",7),t._uU(15,"Direcci\xf3n: "),t.TgZ(16,"span",8),t._uU(17),t.qZA(),t.qZA(),t.TgZ(18,"p",7),t._uU(19,"Tel\xe9fono: "),t.TgZ(20,"span",8),t._uU(21),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",9),t.TgZ(23,"div",10),t.TgZ(24,"h3",6),t._uU(25,"Lista de pedido"),t.qZA(),t._UZ(26,"mat-divider"),t._UZ(27,"app-orders-table",11),t.TgZ(28,"div",12),t.TgZ(29,"h3",6),t._uU(30),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(9),t.Oqu(o.orders.user.name),t.xp6(4),t.Oqu(o.orders.user.email),t.xp6(4),t.Oqu(o.orders.user.address),t.xp6(4),t.Oqu(o.orders.user.phone),t.xp6(6),t.Q6J("orders",o.orders.order),t.xp6(3),t.hij("Total a Pagar: $ ",o.total.toFixed(2),"")}}let C=(()=>{class e{constructor(o,n){this._orderService=o,this.activatedRoute=n,this.total=0,this.displayedColumns=["posicion","descripcion","tipo","precio"]}ngOnInit(){this.getOrder()}getOrder(){this.activatedRoute.params.subscribe(o=>{this._orderService.getOrder(o.id).subscribe(n=>{this.orders=n[0],this.total=this.CalcTotal(this.orders.order)})})}CalcTotal(o){let n=0;return o.forEach(d=>{n+=d.quantity*d.price}),n}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.p),t.Y36(s.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-order-user"]],decls:6,vars:1,consts:[[1,"order-container"],["mat-raised-button","","color","primary","routerLink","/admin/orders"],["fxLayout","row wrap","fxLayoutAlign","space-between","class","orders-content",4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","space-between",1,"orders-content"],["fxFlex","100","fxFlex.gt-sm","30",1,"personal-data"],[1,"data"],[1,"text-bold"],[1,"text-title"],[1,"text-subtitle"],["xFlex","100","fxFlex.gt-sm","69",1,"orders-table-container"],[1,"orders-table"],[3,"orders"],[1,"total-price"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.TgZ(2,"mat-icon"),t._uU(3,"arrow_back"),t.qZA(),t._uU(4," Regresar "),t.qZA(),t.YNc(5,b,31,6,"div",2),t.qZA()),2&o&&(t.xp6(5),t.Q6J("ngIf",n.orders))},directives:[m.lW,s.rH,g.Hw,p.O5,c.xw,c.Wh,c.yH,h.d,O.U],styles:[".order-container[_ngcontent-%COMP%]{padding:10px 8px}.orders-content[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:15px}.personal-data[_ngcontent-%COMP%]{width:100%;background-color:#212121;border-radius:5px;padding:20px 5px;margin-bottom:10px}.data[_ngcontent-%COMP%]{background-color:#fff;color:#000;padding:10px}.orders-table-container[_ngcontent-%COMP%]{width:100%;background-color:#212121;border-radius:5px;padding:20px 5px;margin-bottom:10px}.orders-table[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#fff;color:#000}mat-divider[_ngcontent-%COMP%]{margin-bottom:20px}.text-bold[_ngcontent-%COMP%]{font-weight:bold;margin-bottom:0}.text-title[_ngcontent-%COMP%]{font-weight:bold}.text-subtitle[_ngcontent-%COMP%]{font-weight:normal;font-style:italic}.total-price[_ngcontent-%COMP%]{width:100%;text-align:right;box-sizing:border-box;padding-right:24px}"]}),e})();var i=a(2789),x=a(1254);function T(e,r){1&e&&(t.TgZ(0,"th",11),t._uU(1," N\xb0 "),t.qZA())}function v(e,r){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const o=r.$implicit,n=t.oxw();t.xp6(1),t.hij(" ",n.users.indexOf(o)+1," ")}}function A(e,r){1&e&&(t.TgZ(0,"th",11),t._uU(1," Nombre "),t.qZA())}function _(e,r){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.Oqu(o.name)}}function P(e,r){1&e&&(t.TgZ(0,"th",11),t._uU(1," Email "),t.qZA())}function y(e,r){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.Oqu(o.email)}}function U(e,r){1&e&&(t.TgZ(0,"th",11),t._uU(1," Accion "),t.qZA())}const f=function(e){return["/admin/orders/order",e]};function w(e,r){if(1&e&&(t.TgZ(0,"td",12),t.TgZ(1,"div",13),t.TgZ(2,"button",14),t.TgZ(3,"mat-icon"),t._uU(4,"shopping_cart"),t.qZA(),t._uU(5," Pedidos "),t.qZA(),t.qZA(),t.TgZ(6,"div",15),t.TgZ(7,"button",16),t.TgZ(8,"mat-icon"),t._uU(9,"shopping_cart"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const o=r.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(2,f,o._id)),t.xp6(5),t.Q6J("routerLink",t.VKq(4,f,o._id))}}function q(e,r){1&e&&t._UZ(0,"tr",17)}function M(e,r){1&e&&t._UZ(0,"tr",18)}const N=function(){return[5,10,25,100]},S=[{path:"",component:(()=>{class e{constructor(o){this._orderService=o,this.displayedColumns=["id","nombre","email","accion"]}ngOnInit(){this.getOrders()}getOrders(){this._orderService.getOrder().subscribe(o=>{let n=[];o.forEach(d=>{let Z=Object.assign({_id:d._id},d.user);n.push(Z)}),this.users=n,this.dataSource=new i.by(n),this.dataSource.paginator=this.paginator})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-orders-page"]],viewQuery:function(o,n){if(1&o&&t.Gf(x.NW,5),2&o){let d;t.iGM(d=t.CRH())&&(n.paginator=d.first)}},decls:17,vars:6,consts:[[1,"orders-list"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","email"],["matColumnDef","accion"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page",3,"pageSize","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"buttons-container-web"],["mat-raised-button","","color","accent",3,"routerLink"],[1,"buttons-container-mobile"],["mat-mini-fab","","color","accent",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"table",1),t.ynx(2,2),t.YNc(3,T,2,0,"th",3),t.YNc(4,v,2,1,"td",4),t.BQk(),t.ynx(5,5),t.YNc(6,A,2,0,"th",3),t.YNc(7,_,2,1,"td",4),t.BQk(),t.ynx(8,6),t.YNc(9,P,2,0,"th",3),t.YNc(10,y,2,1,"td",4),t.BQk(),t.ynx(11,7),t.YNc(12,U,2,0,"th",3),t.YNc(13,w,10,6,"td",4),t.BQk(),t.YNc(14,q,1,0,"tr",8),t.YNc(15,M,1,0,"tr",9),t.qZA(),t._UZ(16,"mat-paginator",10),t.qZA()),2&o&&(t.xp6(1),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSize",5)("pageSizeOptions",t.DdM(5,N)))},directives:[i.BZ,i.w1,i.fO,i.Dz,i.as,i.nj,x.NW,i.ge,i.ev,m.lW,s.rH,g.Hw,i.XQ,i.Gk],styles:[".orders-list[_ngcontent-%COMP%]{max-width:700px;margin:0 auto;border:1px solid rgba(216,210,210,.788);border-radius:10px;padding:20px 50px}table[_ngcontent-%COMP%]{width:100%}.btn-delete[_ngcontent-%COMP%]{margin-right:30px}.buttons-container-mobile[_ngcontent-%COMP%]{display:none}@media (max-width:700px){.orders-list[_ngcontent-%COMP%]{padding:20px 5px}}@media (max-width:599px){.buttons-container-mobile[_ngcontent-%COMP%]{display:block;width:40px}.buttons-container-web[_ngcontent-%COMP%]{display:none}.btn-delete[_ngcontent-%COMP%]{margin-right:10px}}"]}),e})()},{path:"order/:id",component:C}];let D=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(S)],s.Bz]}),e})();var Q=a(9673),Y=a(4466),R=a(5566);let z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,D,Q.q,Y.m,R.o9]]}),e})()}}]);