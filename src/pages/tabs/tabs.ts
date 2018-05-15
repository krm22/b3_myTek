import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController  } from 'ionic-angular';


@IonicPage({
  name: 'TabsPage'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: string = 'MoviesPage';
  tab2Root: string = 'MenuPage';
  // tab3Root: string = 'NotificationsPage';
  // tab4Root: string = 'ProfilePage';

  constructor
  (
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public navParams: NavParams
  ){}




}
