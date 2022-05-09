import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})
export class NavbarPage implements OnInit {

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
