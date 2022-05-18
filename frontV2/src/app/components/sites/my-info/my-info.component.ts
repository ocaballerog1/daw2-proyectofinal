import { Component, OnInit } from '@angular/core';
import {User} from "../../../interfaces/user";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss'],
})
export class MyInfoComponent implements OnInit {

  constructor(private authSvc:AuthService) { }
  user:User;


  ngOnInit() {
    this.user = this.authSvc.user;
  }
}
