import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import firebase from "firebase/compat";
import User = firebase.User;
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent {
  public user$:Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc:AuthService) { }

  async onSendEmail(): Promise<void> {
    try{
      await this.authSvc.sendVerificationEmail()
    } catch (error){
      console.log('Error', error
      )
    }

  }
  ngOnDestroy(): void {
    this.authSvc.logout();
  }
}
