import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading } from 'ionic-angular';


@Injectable()
export class LoginMessageProvider {

  loading: Loading;

  constructor
  (
    public alertCtrl : AlertController,
    public loadingCtrl: LoadingController
  ) {}

  loginWelcomeMessage(){
    let alert = this.alertCtrl.create({
      title: 'Login Successful',
      subTitle: 'Welcome to MediaTek',
      buttons: ['OK']
    });
    alert.present();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true,
    });
    this.loading.present();
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
        }
      ]
    });
    alert.present();
  }

}
