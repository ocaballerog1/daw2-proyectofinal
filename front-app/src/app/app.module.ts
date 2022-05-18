import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {NavbarPageModule} from "./shared/navbar/navbar.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, BrowserModule, FormsModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, NavbarPageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
