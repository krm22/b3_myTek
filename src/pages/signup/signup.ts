import { Component  } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPageModule, IonicPage} from 'ionic-angular';

import { AuthProvider } from '../../providers/auth.provider';

import { LoginMessageProvider } from '../../providers/loginMessage.provider';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  name: 'SignupPage'
})
@Component({
  selector: 'page-register',
  templateUrl: 'signup.html',
})
export class SignupPage {

  createSuccess = false;
  signUpCredentials = { email: '', password: '', firstname: '', surname: '' };


  constructor
  (
    public navCtrl: NavController,
    public navParams: NavParams,
    public signUpAuth: AuthProvider,
    public alertCtrl: AlertController,
    public authMessage: LoginMessageProvider
  ){}

  public signUp() {
    this.signUpAuth.signUp(this.signUpCredentials).subscribe( success => {
      if (success) {
        this.authMessage.showPopup("Success", "Account created.");
        this.navCtrl.push('TabsPage')
      } else {
        this.navCtrl.push(SignupPage)
      }
    })
  }


}
