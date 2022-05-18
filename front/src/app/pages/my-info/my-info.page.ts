import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.page.html',
  styleUrls: ['./my-info.page.scss'],
})
export class MyInfoPage implements OnInit {

  constructor(private authSvc:AuthService) { }
  user:User;


  ngOnInit() {
    this.user = this.authSvc.user;
  }
}
//TODO Al meter el {{}} en html y con la
