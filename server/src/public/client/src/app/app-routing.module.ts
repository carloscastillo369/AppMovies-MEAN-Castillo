import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home/pages/home-page/home-page.component';
import { SignInPageComponent } from './modules/home/sign-in/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './modules/home/sign-up/pages/sign-up-page/sign-up-page.component';
import { AdminPageComponent } from './modules/admin/home/pages/admin-page/admin-page.component';
import { PublicPageComponent } from './modules/public/home/pages/public-page/public-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home/home.module`).then(m => m.HomeModule)
  },
  {
    path:'signin',
    component: SignInPageComponent,
    loadChildren: () => import(`./modules/home/sign-in/sign-in.module`).then(m => m.SignInModule)
  },
  {
    path:'signup',
    component: SignUpPageComponent,
    loadChildren: () => import(`./modules/home/sign-up/sign-up.module`).then(m => m.SignUpModule)
  },
  {
    path:'HomeMovie',
    component: PublicPageComponent,
    loadChildren: () => import(`./modules/public/home/public.module`).then(m => m.PublicModule)
  },
  {
    path:'admin',
    component: AdminPageComponent,
    loadChildren: () => import(`./modules/admin/home/admin.module`).then(m => m.AdminModule)
  },
  {
    path:'',
    redirectTo:'/',
    pathMatch: 'full'
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
