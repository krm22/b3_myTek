import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { LoginMessageProvider } from '../../providers/loginMessage.provider';
import { SignupPage } from '../signup/signup';
import { User } from '../../models/User';


@IonicPage({
  name:'LoginPage'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage  {

  private loginForm : User = new User();
  @ViewChild('form') form: any;
  public currentUser : User[] ;


  constructor
  ( public navCtrl: NavController,
    public navParams: NavParams,
    public authLogin: AuthProvider,
    public authMessage: LoginMessageProvider
  ) {}

  public getUser(){
    this.authLogin.getUserProfile().subscribe((data : any)=> {
      if(data){
       this.currentUser = [ data.firstname_user, data.surname_user, data.email_user ] ;
       this.authMessage.showPopup(`Welcome back ${this.currentUser[0]}  ${this.currentUser[1]}` , "What movies have you in mind today?");
      }
    })
  }

  public onSubmit() {
    if(this.form.valid){
    this.authMessage.showLoading()
    this.authLogin.login(this.loginForm).subscribe((allowed : any ) =>{
      if(allowed) {
        let user = allowed.token;
        localStorage.setItem('token', user)
        this.getUser();
        this.navCtrl.push('TabsPage')
       }else{
        this.navCtrl.push(LoginPage)
       }
       this.form.reset();
     })
    }
  }

}









































