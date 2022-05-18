import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
  }
  cerrar(){
    this.authSvc.logout()
    this.router.navigate(['/home'])
  }
  entrar(){
    this.router.navigate(['/login'])
  }

}

