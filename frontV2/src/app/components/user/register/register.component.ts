import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class RegisterComponent implements OnInit {

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
  }
  async onRegister(email, password){
    try{
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        //Verificar Email
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error ', error)
    }
  }
  private redirectUser(isVerified:boolean){
    if (isVerified){
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['verify-email']);
    }
  }

}
