import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { LoginMessageProvider } from '../../providers/loginMessage.provider';
import { LoginUser } from '../../models/loginUser.model';



@IonicPage({
  name:'LoginPage'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginForm : LoginUser = new LoginUser();
  @ViewChild('form') form: any;

  constructor
  ( public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authLogin: AuthProvider,
    public authMessage: LoginMessageProvider,
  ) {}

  public onSubmit() {
    if(this.form.valid){
      console.log(this.loginForm)
    this.authMessage.showLoading()
    this.authLogin.login(this.loginForm).subscribe(allowed =>{
      if(allowed) {
        this.navCtrl.push('TabsPage')

        this.authMessage.loginWelcomeMessage();
       }else{
        this.navCtrl.push(LoginPage)
       }
       this.form.reset();
     })
    }
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








