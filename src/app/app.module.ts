import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BackgroundMode } from '@ionic-native/background-mode';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { Keyboard } from "@ionic-native/keyboard";

import { RestProvider } from '../providers/rest.provider';
import { AuthProvider } from '../providers/auth.provider';
import { LoginMessageProvider } from '../providers/loginMessage.provider'
import { MdbProvider } from '../providers/mdb.provider';
import { IonicImageLoader } from 'ionic-image-loader';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    ComponentsModule,
    HttpClientModule,
    BrowserModule,
    IonicImageLoader.forRoot(),
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false, tabsHideOnSubPages: true })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Keyboard,
    StatusBar,
    SplashScreen,
    RestProvider,
    AuthProvider,
    LoginMessageProvider,
    MdbProvider,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackgroundMode
  ]
})
export class AppModule {}
