import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { LoginMessageProvider } from '../../providers/loginMessage.provider'
//



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'LoginPage'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  loginCredentials = { email: '', password: '' }


  constructor
  ( public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authLogin: AuthProvider,
    public authMessage: LoginMessageProvider,
  ) {}


  public login() {
    this.authMessage.showLoading()
    this.authLogin.login(this.loginCredentials).subscribe( allowed =>{
      if(allowed) {
        this.navCtrl.push('TabsPage')
        this.authMessage.loginWelcomeMessage();
       }else{
        this.navCtrl.push(LoginPage)
       }
     })
  }




}







































  // @ViewChild('email') email;
  // @ViewChild('password') password;


  // errorMessage: string;
  // message:boolean;

  // ngOnInit(){
  //   this.authLogin.currentMessage.subscribe(message => this.message = message);
  //   console.log('LoginPage loaded');
  // }


  // login(){
  //     this.authLogin.login(credentials)
  //     if (this.message === true) {
  //         console.log(this.message);
  //         this.authMessage.loginWelcomeMessage();
  //         this.navCtrl.push(HomePage);
  //      }else if(this.message === false) {
  //       console.log(this.message);
  //         this.navCtrl.push(LoginPage);
  //         this.authMessage.loginPageErrorMessage();
  //     }

  //   }








