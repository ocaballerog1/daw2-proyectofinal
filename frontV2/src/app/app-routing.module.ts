import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {AdminComponent} from "./components/sites/admin/admin.component";
import {VerifyEmailComponent} from "./components/user/verify-email/verify-email.component";
import {ForgotPasswordComponent} from "./components/user/forgot-password/forgot-password.component";
import {HomeComponent} from "./components/sites/home/home.component";
import {SideMenuComponent} from "./components/shared/side-menu/side-menu.component";
import {CitasComponent} from "./components/sites/citas/citas.component";
import {MyInfoComponent} from "./components/sites/my-info/my-info.component";
import {ListUserComponent} from "./components/sites/list-user/list-user.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'admin', component: AdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'verify-email', component: VerifyEmailComponent

  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'home', component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'sidemenu', component: SideMenuComponent
  },
  {
    path: 'citas', component: CitasComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'my-info',  component:MyInfoComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'list-user', component: ListUserComponent
  },
  {
    path:'**',pathMatch:'full', redirectTo:''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
