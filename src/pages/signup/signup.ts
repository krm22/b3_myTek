import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { LoginMessageProvider } from '../../providers/loginMessage.provider';

import { SignUpUser } from '../../models/signUpUser'

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

  private signUpUserForm : SignUpUser = new SignUpUser();
  @ViewChild('signUpForm') form: any;

  constructor
  (
    public navCtrl: NavController,
    public navParams: NavParams,
    public signUpAuth: AuthProvider,
    public alertCtrl: AlertController,
    public authMessage: LoginMessageProvider
  ){}

  public onSubmit() {
    this.signUpAuth.signUp(this.signUpUserForm).subscribe( success => {
      if (success) {
        this.authMessage.showPopup("Success", "Account created.");
        this.navCtrl.push('TabsPage')
      } else {
        this.navCtrl.push(SignupPage)
      }
    })
  }


}