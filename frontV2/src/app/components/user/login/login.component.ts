import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
  }
  async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);

      if (user){
        //Verificar Email
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    }catch (error) {
      console.log(error)
    }
  }
  private redirectUser(isVerified:boolean){
    if (isVerified){
      this.router.navigate(['home']);
    }else{
      this.router.navigate(['verify-email']);
    }
  }

}
