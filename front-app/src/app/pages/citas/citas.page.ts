import { Component, OnInit } from '@angular/core';
import {CitasService} from "../../service/citas.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  constructor(private citasSvc:CitasService, private authSvc:AuthService) { }

  ngOnInit() {
    // this.citasSvc.citasUser();
  }

}
