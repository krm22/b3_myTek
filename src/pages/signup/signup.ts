import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { LoginMessageProvider } from '../../providers/loginMessage.provider';

import { User } from '../../models/User';


@IonicPage({
  name: 'SignupPage'
})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  private signUpUserForm : User = new User();
  @ViewChild('signUpForm') signUpForm: any;
  // public currentUser : User[] ;

  constructor
  (
    public navCtrl: NavController,
    public navParams: NavParams,
    public signUpAuth: AuthProvider,
    public authMessage: LoginMessageProvider
  ){}

  public onSubmit() {
    if(this.signUpForm.valid){
       this.signUpAuth.signUp(this.signUpUserForm).subscribe(success => {
      if (success) {
        this.authMessage.showPopup(` Welcome aboard ${this.signUpUserForm['firstname']} `, "Account created" );
        this.navCtrl.push('TabsPage')
      } else {
        this.navCtrl.push(SignupPage)
      }
      this.signUpForm.reset();
    })
  }
}

// public getUser(){
//   this.signUpAuth.getUserProfile().subscribe((data : any)=> {
//     if(data){
//      this.currentUser = [ data.firstname_user, data.surname_user, data.email_user ]
//     }else{
//       this.authMessage.showPopup(` Welcome aboard ${this.signUpUserForm['firstname']} `, "Account created" );
//     }
//     return this.currentUser
//   })
// }


}
