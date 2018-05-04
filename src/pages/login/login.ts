import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';
import { AuthProvider } from '../../app/providers/auth';
import { LoginMessageProvider } from '../../app/providers/loginMessage.provider'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {


  @ViewChild('email') email;
  @ViewChild('password') password;


  errorMessage: string;
  message:boolean;


  constructor
  (
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authLogin: AuthProvider,
    public authMessage: LoginMessageProvider
  ) {

  }

  ngOnInit(){
    this.authLogin.currentMessage.subscribe(message => this.message = message);
    console.log('LoginPage loaded');
  }


  login(){
      this.authLogin.login(this.email.value, this.password.value)
      if (this.message === true) {
          console.log(this.message);
          this.authMessage.loginWelcomeMessage();
          this.navCtrl.push(HomePage);
       }else if(this.message === false) {
        console.log(this.message);
          this.navCtrl.push(LoginPage);
          this.authMessage.loginPageErrorMessage();
      }

    }

  }











