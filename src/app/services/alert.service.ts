import { Injectable } from '@angular/core';
import { ToastController,AlertController, LoadingController} from '@ionic/angular';

//import{}from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastController: ToastController,private alertController:AlertController,
    private loadingController: LoadingController) { }
  
  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',  
      color: 'dark'
    });
    toast.present();
  }

async ShowAlert(message:string) {
  const alert = await this.alertController.create({
    header: 'Alert',
    //subHeader: 'Subtitle',
    message: message,
    buttons: ['OK']
    //buttons: ['Disagree', 'Agree']
  });

  await alert.present();
}
async presentConfirm():Promise<any> {
  let alert =await this.alertController.create({
    header: 'Confirm',
    message: 'Are you sure to delete..!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          return false
        }
      },
      {
        text: 'Ok',
        handler: () => {
         return true
        }
      }
    ]
  });
  alert.present();
  //return false;
}

async Loading(show:boolean)
{
  const loading = await this.loadingController.create({
    message: 'Loading...',
});
if(show){
  await loading.present();
}
await loading.dismiss();
}


}
