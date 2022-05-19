import { Component, OnInit } from '@angular/core';
import {CitasService} from "../../service/citas.service";
import {AuthService} from "../../service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {error} from "protractor";
@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  citas: any[] = [];
  isOpen:boolean;
  addCita: FormGroup;
  // submitted:boolean = false; Para las validaciones
  constructor(private citasSvc: CitasService, private authSvc: AuthService, private fb:FormBuilder) {
    this.addCita = this.fb.group({
      observaciones: ['', Validators.required],
      fecha: ['', Validators.required],
      medico: `users/${this.authSvc.user.uid}`,
    });
  }

  ngOnInit() {
    this.getCitas();
    this.isOpen = false;
  }

  getCitas(){
    this.citasSvc.getCitas().subscribe(data => {
      this.citas = [];
      data.forEach((element: any) =>{
        this.citas.push({
          id: element.payload.doc.id,
          orden: element.payload.doc.orden,
          ...element.payload.doc.data()
        });
      });
      console.log(this.citas);
    });
  }
  addCitas(){
    if (this.addCita.invalid){
      return;
    }
    const cita: any = {
      observaciones: this.addCita.value.observaciones,
      fecha: this.addCita.value.fecha,
      medicoUid: this.addCita.value.medico
    };
    this.citasSvc.addcita(cita).then(() => {
      console.log('Cita añadida con exito');
    }).catch(err => {
      console.log('Error al addCita', err);
    });
  }
  cancelCita(id:any){
    this.citasSvc.cancelCita(id);
  }

}
