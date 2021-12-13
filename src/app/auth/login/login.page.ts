import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private  router: Router,
    private modalController: ModalController,
    private navCtrl: NavController,
    private alertService: AlertService
    ) { }

  // ngOnInit() {
  // }
  // // login(form){
  // //   this.router.navigateByUrl("tabs");
  // //   // this.authService.login(form.value).subscribe((res)=>{
  // //   //   this.router.navigateByUrl('home');
  // //   // });
  // // }
  // login() {
  //   this.authService.login();
  //   console.log(TOKEN_KEY);
  // }
  ngOnInit() {
  }
  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }
  // On Register button tap, dismiss login modal and open register modal
  // async registerModal() {
  //   this.dismissLogin();
  //   const registerModal = await this.modalController.create({
  //     component: RegisterPage
  //   });
  //   return await registerModal.present();
  // }
  login(form: NgForm) {
    //alert('log in clicked');
   
    this.alertService.presentToast('Login Successfull');
    //if(this.authService.isLoggedIn)
    //this.authService.setAdmin(true);
    //this.authService.isAdmin = true;

    this.router.navigate(['/tabs']);
  }

}
