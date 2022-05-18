import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/auth.guard";
import {ListUserComponent} from "./user/list-user/list-user.component";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./user/verify-email/verify-email.module').then(m => m.VerifyEmailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./user/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'navbar',
    loadChildren: () => import('./shared/navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'citas',
    loadChildren: () => import('./pages/citas/citas.module').then( m => m.CitasPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'my-info',
    loadChildren: () => import('./pages/my-info/my-info.module').then( m => m.MyInfoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'list-user', component: ListUserComponent
  },

  {
    path:'**',pathMatch:'full', redirectTo:'login'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
