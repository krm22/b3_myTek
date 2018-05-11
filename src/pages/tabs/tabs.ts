import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: string = 'MoviesPage';
  // tab2Root: string = 'ExplorePage';
  // tab3Root: string = 'NotificationsPage';
  // tab4Root: string = 'ProfilePage';

  constructor
  (
    public navCtrl: NavController,
    public navParams: NavParams
  ){}

}
