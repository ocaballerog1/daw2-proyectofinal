import { Component, OnInit } from '@angular/core';
import {CitasService} from "../../service/citas.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  citas: any[] = [];
  constructor(private citasSvc: CitasService, private authSvc: AuthService) { }

  ngOnInit() {
    this.getCitas();
  }

  getCitas(){
    this.citas = [];
    this.citasSvc.getCitas().subscribe(data => {
      data.forEach((element: any) =>{
        this.citas.push(element.payload.doc.data());
      });
    });
  }

}
