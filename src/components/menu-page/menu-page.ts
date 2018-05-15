import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

/**
 * Generated class for the MenuPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-page',
  templateUrl: 'menu-page.html'
})
export class MenuPageComponent {

  text: string;

  constructor(
    public menuCtrl: MenuController
  ) {}


    openMenu() {
      this.menuCtrl.open();
    }

    closeMenu() {
      this.menuCtrl.close();
    }

    toggleMenu() {
      this.menuCtrl.toggle();
    }
    
  }


