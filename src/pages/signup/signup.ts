import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { AuthProvider } from '../../app/providers/auth';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  @ViewChild('password') password;
  @ViewChild('email') email;
  @ViewChild('surname') surname;
  @ViewChild('firstname') firstname;

  constructor(public navCtrl: NavController, public navParams: NavParams, public signUpAuth: AuthProvider,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp(){
    if (this.email.value != null && this.password.value != null){
      this.signUpAuth.signUp(this.email.value, this.password.value, this.surname.value, this.firstname.value)
        let alert = this.alertCtrl.create({
          title: ' Successful',
          subTitle: 'Welcome to MediaTek',
          buttons: ['OK']
        });
        alert.present();
       }
       console.log(this.email.value, this.password.value, this.surname.value, this.firstname.value)
      this.navCtrl.setRoot(TabsPage);
    }
  }
