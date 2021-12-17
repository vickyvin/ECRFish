import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import{ provideStorage,getStorage}from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from  "@angular/fire/auth";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { LoginPage } from './auth/login/login.page';
import { RegisterPage } from './auth/register/register.page';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() =>getFirestore()),
    provideAuth(()=>{
      if (environment.useEmulators) {
        const fireauth = getAuth();
        return fireauth;
    } else {
        getAuth();
    }
    }),
    provideFunctions(() => {
      if (environment.useEmulators) {
        const firefunctions = getFunctions();
        return firefunctions;
    } else {
        getFunctions();
    }
    }),
    provideMessaging(() => getMessaging()),
    provideStorage(() => {
      if (environment.useEmulators) {
        const firestorage = getStorage();
        return firestorage;
    } else {
        getStorage();
    }
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
  
})
export class AppModule {

}

