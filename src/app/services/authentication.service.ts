import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
//import { User } from '../Models/User';
import { tap } from 'rxjs/operators';
import { Router } from  "@angular/router";
/* import { AngularFireAuth } from  "@angular/fire/compat/auth";
import {AngularFireAuth}from "@angular/fire/auth" */

import firebase from 'firebase/compat/app';
import { User } from 'firebase/auth';
import { provideAuth,getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
   sendEmailVerification, sendPasswordResetEmail, signInWithPopup, Auth } from  "@angular/fire/auth"

export const TOKEN_KEY = 'auth-token';
//const auth = getAuth();

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  isAdmin = false;
  token: any;
  user: User;
  username:string;
  

  public authenticationState = new BehaviorSubject(false);

  constructor( private http: HttpClient,
    private env: EnvService,
     public  router:  Router,private auth:Auth) 
    { 
      if(auth.currentUser){
        this.user = this.auth.currentUser;
          
        localStorage.setItem('user', JSON.stringify(this.user));
      }else {
          localStorage.setItem('user', null);
      }

    }


   async login(email: string, password: string) {
      
      console.log('login email password',email+''+password);
       await signInWithEmailAndPassword(this.auth,email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user));
        
        // ...
      })
     /*  .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error in login service',errorMessage);
       
      }); */
      
     
      //this.router.navigate(['/tabs']);
    }
   async register(email: string, password: string){
      console.log('register emailpassword',email+''+password);
      await createUserWithEmailAndPassword(this.auth,email, password).then(res=>{
        console.log('user created successfully',res);
        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('user creation service error');
        return false;
      });
      
      return false;
     
      //this.sendEmailVerification();
    }
    async sendEmailVerification() {
      await sendEmailVerification(this.auth.currentUser);
      this.router.navigate(['admin/verify-email']);
    } 
    async sendPasswordResetEmail(passwordResetEmail: string) {
      return await sendPasswordResetEmail(this.auth,passwordResetEmail);
   }
   async logout(){
    await this.auth.signOut();
    localStorage.removeItem('user');
    this.user=null;
    //this.router.navigate(['login']);
  }
  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }
  get UserName():string{
    this.user =  JSON.parse(localStorage.getItem('user'));
   if(this.user){
    let arrUn=this.user.email.split('@');
   return 'Hi '+arrUn[0];
   }
    return 'There';
  }
  async  loginWithGoogle(){
      await  signInWithPopup(this.auth,new firebase.auth.GoogleAuthProvider())
      this.router.navigate(['/tabs']);
  }
   /*  getToken() {
      return this.storage.getItem('token').then(
        data => {
          this.token = data;
          if (this.token != null) {
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }
        },
        error => {
          this.token = null;
          this.isLoggedIn = false;
        }
      );
    } */
  
   /*  setAdmin(val:boolean)
    {
      //alert('set admin '+val);
      if (val)
      {
         this.storage.setItem('isAdmin', val);
      }else
      {
         this.storage.setItem('isAdmin', val);
      }
      
    } */
     
  

}
