"use strict";(self.webpackChunkappmovies=self.webpackChunkappmovies||[]).push([[831],{831:(F,g,i)=>{i.r(g),i.d(g,{DetailMovieModule:()=>q});var s=i(8583),l=i(4655),t=i(7716),u=i(3062),p=i(5618),c=i(2238),v=i(9075),m=i(1095);let x=(()=>{class e{constructor(o,n){this.sanitizer=o,this.data=n,this.movieTitle=this.data.title,this.urlTrailer=this.sanitizer.bypassSecurityTrustResourceUrl(this.data.urltrailer)}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(v.H7),t.Y36(c.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-modal-trailer"]],decls:8,vars:2,consts:[[1,"modal"],["mat-dialog-content","",1,"body-trailer"],["title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"],["mat-dialog-actions",""],["mat-raised-button","","color","primary","mat-dialog-close",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"div",1),t._UZ(4,"iframe",2),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"button",4),t._uU(7,"Close"),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Oqu(n.movieTitle),t.xp6(2),t.Q6J("src",n.urlTrailer,t.uOi))},directives:[c.xY,c.H8,m.lW,c.ZT],styles:["iframe[_ngcontent-%COMP%]{width:200px;height:115px}@media (min-width: 600px){iframe[_ngcontent-%COMP%]{width:500px;height:315px}}"]}),e})();var f=i(8259),d=i.n(f),h=i(910),Z=i(6627);function M(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return r.buyMovie(r.movie._id)}),t._uU(1),t.qZA()}if(2&e){const o=t.oxw();t.xp6(1),t.hij(" $",o.movie.purchaseprice," Compra ")}}function b(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return r.rentMovie(r.movie._id)}),t._uU(1),t.qZA()}if(2&e){const o=t.oxw();t.xp6(1),t.hij(" $",o.movie.rentalprice," Renta ")}}let C=(()=>{class e{constructor(o,n,r){this._cartService=o,this._apiMoviesService=n,this.dialog=r,this.modal="modal"}ngOnInit(){}buyMovie(o){this._apiMoviesService.getMovie(o).subscribe(n=>{this._cartService.addMovieToCart(n[0],n[0].purchaseprice,n[0].purchasestock,"compra")}),d().fire({position:"top",icon:"success",title:"Pel\xedcula agregada como Compra!",showConfirmButton:!1,timer:2500})}rentMovie(o){this._apiMoviesService.getMovie(o).subscribe(n=>{this._cartService.addMovieToCart(n[0],n[0].rentalprice,n[0].rentalstock,"renta")}),d().fire({position:"top",icon:"success",title:"Pel\xedcula agregada como Renta!",showConfirmButton:!1,timer:2500})}openDialog(o){const n=new c.vA;n.disableClose=!0,n.data=o,this.dialog.open(x,n)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(h.N),t.Y36(u.l),t.Y36(c.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-buttons-function"]],inputs:{movie:"movie"},decls:17,vars:2,consts:[[1,"buttons-container"],[1,"text"],["mat-raised-button","",1,"btn-trailer",3,"click"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click",4,"ngIf"],["mat-raised-button","","routerLink","/public/movies"],["mat-raised-button","","color","primary","routerLink","/public/cart"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"p",1),t._uU(2,"Renta o compra las mejores pel\xedculas."),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return n.openDialog(n.movie)}),t.TgZ(4,"mat-icon"),t._uU(5,"smart_display"),t.qZA(),t._uU(6," Ver trailer "),t.qZA(),t.YNc(7,M,2,1,"button",3),t.YNc(8,b,2,1,"button",4),t.TgZ(9,"button",5),t.TgZ(10,"mat-icon"),t._uU(11,"add_shopping_cart"),t.qZA(),t._uU(12," Seguir comprando "),t.qZA(),t.TgZ(13,"button",6),t.TgZ(14,"mat-icon"),t._uU(15,"shopping_cart"),t.qZA(),t._uU(16," Ir al carrito "),t.qZA(),t.qZA()),2&o&&(t.xp6(7),t.Q6J("ngIf",0!=n.movie.purchasestock),t.xp6(1),t.Q6J("ngIf",0!=n.movie.rentalstock))},directives:[m.lW,Z.Hw,s.O5,l.rH],styles:[".buttons-container[_ngcontent-%COMP%]{width:100%;padding:40px;margin-bottom:20px;box-sizing:border-box;background-color:#212121;border-radius:10px}button[_ngcontent-%COMP%]{width:100%;height:50px;margin-bottom:10px}.btn-trailer[_ngcontent-%COMP%]{background-color:#c4302b;color:#fff}.text[_ngcontent-%COMP%]{color:#fff;font-size:16px;margin-bottom:15px}"]}),e})();var T=i(4885);function _(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._UZ(3,"div",4),t.TgZ(4,"div",5),t.TgZ(5,"div",6),t.TgZ(6,"div",7),t._UZ(7,"img",8),t.qZA(),t.TgZ(8,"div",9),t.TgZ(9,"h1"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA(),t.TgZ(15,"p"),t._uU(16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",10),t._UZ(18,"hr"),t.TgZ(19,"h2"),t._uU(20,"Sinopsis"),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(23,"app-buttons-function",11),t.TgZ(24,"div",12),t.TgZ(25,"p"),t._uU(26,"Director: "),t.TgZ(27,"span"),t._uU(28),t.qZA(),t.qZA(),t.TgZ(29,"p"),t._uU(30,"Actores: "),t.TgZ(31,"span"),t._uU(32),t.qZA(),t.qZA(),t.TgZ(33,"p"),t._uU(34,"Idioma: "),t.TgZ(35,"span"),t._uU(36),t.qZA(),t.qZA(),t.TgZ(37,"p"),t._uU(38,"Pa\xeds: "),t.TgZ(39,"span"),t._uU(40),t.qZA(),t.qZA(),t.TgZ(41,"p"),t._uU(42,"Premios: "),t.TgZ(43,"span"),t._uU(44),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&e){const o=t.oxw();t.xp6(3),t.Jzz("background-image: linear-gradient(rgba(41, 128, 185, 0), rgb(0, 0, 0)), url(",o.movie.bannerimg,");"),t.xp6(4),t.s9C("src",o.movie.posterimg,t.LSH),t.xp6(3),t.Oqu(o.movie.title),t.xp6(2),t.Oqu(o.movie.genre),t.xp6(2),t.hij("Clasificaci\xf3n: ",o.movie.rated,""),t.xp6(2),t.lnq("Duraci\xf3n: ",o.hours," hr",o.hours>1?"s":null," ",o.mins," min"),t.xp6(6),t.Oqu(o.movie.plot),t.xp6(1),t.Q6J("movie",o.movie),t.xp6(5),t.Oqu(o.movie.director),t.xp6(4),t.Oqu(o.movie.actors),t.xp6(4),t.Oqu(o.movie.language),t.xp6(4),t.hij(" ",o.movie.country,""),t.xp6(4),t.Oqu(o.movie.awards)}}function O(e,a){1&e&&(t.TgZ(0,"div",13),t._UZ(1,"mat-spinner"),t.qZA())}const P=[{path:"",component:(()=>{class e{constructor(o,n){this._apiMoviesService=o,this.activatedRoute=n,this.hours=0,this.mins=0}ngOnInit(){this.activatedRoute.params.subscribe(o=>{this.getDetailMovie(o.id)})}getDetailMovie(o){this._apiMoviesService.getMovie(o).subscribe(n=>{this.movie=n[0],this.MinToHour(this.movie.runtime)})}MinToHour(o){this.hours=Math.floor(o/60),this.mins=o%60}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.l),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-detail-movie-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["ProgressSpinner",""],["fxLayout","row wrap","fxLayoutAlign.gt-xs","space-between",1,"detail-movie-container"],["fxFlex","100","fxFlex.gt-sm","59",1,"card"],[1,"image-banner"],[1,"card-content"],[1,"card-header"],[1,"poster"],[3,"src"],[1,"principal-detail-movie"],[1,"card-body"],["fxFlex","100","fxFlex.gt-xs","49","fxFlex.gt-sm","40","fxLayoutAlign","center",3,"movie"],["fxFlex","100","fxFlex.gt-xs","49","fxFlex.gt-sm","59",1,"extra-detail"],[1,"spinner"]],template:function(o,n){if(1&o&&(t.YNc(0,_,45,17,"ng-container",0),t.YNc(1,O,2,0,"ng-template",null,1,t.W1O)),2&o){const r=t.MAs(2);t.Q6J("ngIf",n.movie)("ngIfElse",r)}},directives:[s.O5,p.xw,p.Wh,p.yH,C,T.$g],styles:["hr[_ngcontent-%COMP%]{color:#fff;height:1px;border-top-width:0px;border-right-width:0px;border-left-width:0px;margin:16px 0;opacity:25%}.spinner[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 164px);display:flex;align-items:center;justify-content:center}.detail-movie-container[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]{width:100%;background-color:#212121;border-radius:5px;margin-bottom:20px}.image-banner[_ngcontent-%COMP%]{padding:0 0 55%;background-size:100%;background-repeat:no-repeat;background-color:#181821;border-radius:5px}.card-content[_ngcontent-%COMP%]{width:100%}.card-header[_ngcontent-%COMP%]{width:100%;padding:0 10px;margin-bottom:10px}.poster[_ngcontent-%COMP%]{width:90px;height:130px;margin-top:-10px;position:relative;z-index:10;float:left}.poster[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;border-radius:7px}.principal-detail-movie[_ngcontent-%COMP%]{width:calc(100% - 110px);margin-left:110px;margin-top:-50px}.principal-detail-movie[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#fff;font-size:30px;font-weight:300;margin-bottom:20px;text-transform:capitalize;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.principal-detail-movie[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:12px;margin-bottom:2px;color:#bbb}.card-body[_ngcontent-%COMP%]{padding:0 10px 15px;color:#fff}.extra-detail[_ngcontent-%COMP%]{width:100%;margin-bottom:20px;padding:10px;background-color:#212121;color:#fff;border-radius:5px}.extra-detail[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-weight:500}.extra-detail[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:300;font-style:italic}@media (min-width: 600px){.image-banner[_ngcontent-%COMP%]{padding:0 0 30%}.card-header[_ngcontent-%COMP%]{margin-bottom:35px}.poster[_ngcontent-%COMP%]{width:120px;height:180px}.principal-detail-movie[_ngcontent-%COMP%]{width:calc(100% - 140px);margin-left:140px}.principal-detail-movie[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{margin-bottom:40px}.principal-detail-movie[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:4px}}"]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(P)],l.Bz]}),e})();var y=i(9673),w=i(4466),U=i(5566);let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,A,y.q,w.m,U.o9]]}),e})()}}]);