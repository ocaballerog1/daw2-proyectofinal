import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private firestore:AngularFirestore, private authSvc:AuthService) {
  }

  addcita(cita: any): Promise<any>{
    return this.firestore.collection(`users/${this.authSvc.user.uid}/citas`).add(cita);
  }

  getCitas(){
    return this.firestore.collection(`users/${this.authSvc.user.uid}/citas`).snapshotChanges();
  }
  cancelCita(id:any): Promise<any>{
    return this.firestore.collection(`users/${this.authSvc.user.uid}/citas`).doc(id).delete();
  }
}
