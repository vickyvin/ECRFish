import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import {Router}from '@angular/router'
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private modalController: ModalController,
    private router: Router,
    private alertService: AlertService,
    private authService:AuthenticationService
  ) { }
  ngOnInit() {
  }
  // Dismiss Register Modal
  dismissRegister() {
    this.modalController.dismiss();
  }
  // On Login button tap, dismiss Register modal and open login Modal
  // async loginModal() {
  //   this.dismissRegister();
  //   const loginModal = await this.modalController.create({
  //     component: LoginPage,
  //   });
  //   return await loginModal.present();
  // }
  register(form: NgForm) {
    if(form.value.password !==form.value.Confirmpassword){
      return this.alertService.presentToast('Password and Confirm Password is Not Matching..');
    }
    //this.alertService.presentToast('Successfully Registered');
    //this.router.navigate(['/login']);
    this.authService.register(form.value.email, form.value.password).then(res=>{
      this.alertService.presentToast('Successfully Registered');
      this.router.navigate(['/login']);
      
    },
    error=>{
      console.log('register failed');
      this.alertService.presentToast('Registeration Failed..!');
    })

  }
      
}

