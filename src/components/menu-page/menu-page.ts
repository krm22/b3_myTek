import { Component, ViewChild } from '@angular/core';
import { MenuController} from 'ionic-angular';


@Component({
  selector: 'menu-page',
  templateUrl: 'menu-page.html'
})
export class MenuPageComponent {


  text: string;
  rootPage: string;


  constructor(
    public menuCtrl: MenuController
  ) {}

  openPage(page) {
    this.rootPage = page;
    this.menuCtrl.close();
  }


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


