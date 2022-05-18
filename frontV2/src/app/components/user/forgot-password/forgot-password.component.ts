import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {

  constructor(private authSvc: AuthService, private router:Router) { }

  async onResetPassword(email){
    try{
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/login'])
    } catch (error){
      console.log('Error', error)
    }
  }



}
