import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { User } from '../../models/User';


@IonicPage({
  name: "ProfilePage"
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public authService: AuthProvider )
  {
    this.getUser()
  }

public currentUser: any =  new Array<User>();
email:any;
firstname:any;
surname:any;


public getUser(){
  this.authService.getUserProfile().subscribe((data : any)=> {
    if(data){
      this.currentUser = [data.firstname_user, data.surname_user, data.email_user] ;
      this.firstname = this.currentUser[0]
      this.surname = this.currentUser[1]
      this.email = this.currentUser[2]
    }
  })
}
}
