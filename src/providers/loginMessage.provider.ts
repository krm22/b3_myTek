import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';


@Injectable()
export class LoginMessageProvider {

  constructor
  (
    public alertCtrl : AlertController,
    public loadingCtrl: LoadingController
  ) {}

  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true,
    });
    loading.present();
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
