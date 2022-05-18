import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private authSvc:AuthService) {
  }

}
