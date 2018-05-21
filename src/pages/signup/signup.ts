import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { LoginMessageProvider } from '../../providers/loginMessage.provider';

import { SignUpUser } from '../../models/signUpUser'
import { Observable } from 'rxjs/Observable';

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
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  private signUpUserForm : SignUpUser = new SignUpUser();
  @ViewChild('signUpForm') signUpForm: any;

  constructor
  (
    public navCtrl: NavController,
    public navParams: NavParams,
    public signUpAuth: AuthProvider,
    public authMessage: LoginMessageProvider
  ){}

  public onSubmit() {
    if(this.signUpForm.valid){
      console.log(this.signUpUserForm)
       this.signUpAuth.signUp(this.signUpUserForm).subscribe(success => {
      if (success) {
        this.authMessage.showPopup(` Welcome aboard ${this.signUpUserForm.firstname} ` , "Account created" );
        this.navCtrl.push('TabsPage') 
      } else {
        this.navCtrl.push(SignupPage)
      }
      this.signUpForm.reset();
    })

  }
}


}
