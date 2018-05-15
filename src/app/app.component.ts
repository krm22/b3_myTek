import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ImageLoaderConfig } from "ionic-image-loader";
import { BackgroundMode } from '@ionic-native/background-mode';
import { Keyboard } from "@ionic-native/keyboard";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: string = 'WelcomePage';

  constructor
  (
    public menuCtrl: MenuController,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private imageLoaderConfig: ImageLoaderConfig,
    public backgroundMode: BackgroundMode,
    private keyboard: Keyboard
  ) {
      this.initializeApp();

      statusBar.styleDefault();
      splashScreen.hide();
    }

    initializeApp(){

      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.

        this.imageLoaderConfig.enableDebugMode();
        this.imageLoaderConfig.enableFallbackAsPlaceholder(false);
        this.imageLoaderConfig.setMaximumCacheAge(7 * 24 * 60 * 60 * 1000);// 7 days
        this.imageLoaderConfig.setConcurrency(10);
        this.imageLoaderConfig.useImageTag(true);
        this.imageLoaderConfig.setCacheDirectoryName('TMDBImgsCache');
        this.imageLoaderConfig.setMaximumCacheSize(50 * 1024 * 1024); //50MB
        //this.imageLoaderConfig.setFallbackUrl('./assets/imgs/fallback.png');
        this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
        this.imageLoaderConfig.enableSpinner(true);

        this.backgroundMode.enable();
        this.backgroundMode.setDefaults({
          silent: true
        });
        this.keyboard.disableScroll(true);
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

}
