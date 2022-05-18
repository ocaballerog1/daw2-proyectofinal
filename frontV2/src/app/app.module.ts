import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "../environments/environment";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SideMenuComponent} from "./components/shared/side-menu/side-menu.component";
import {AngularFireModule} from "@angular/fire/compat";

@NgModule({
  declarations: [AppComponent, SideMenuComponent],
  entryComponents: [],
  imports: [BrowserModule, BrowserModule, FormsModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
