import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
  name:'WelcomePage'
})
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  title = 'Mediatek'
  slogan = 'Your Mobile cinema experience'

  public login() : any{
      this.navCtrl.push('LoginPage')
  }

  public signUp() : any {
     this.navCtrl.push('SignupPage')
  }

}
