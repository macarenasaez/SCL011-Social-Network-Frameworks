import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//configuraciones de firebase//
import {AngularFireModule} from  '@angular/fire';
import {AngularFirestoreModule} from  '@angular/fire/firestore';
import {environment} from  'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';//modulo de autentificacion// 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuth
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
