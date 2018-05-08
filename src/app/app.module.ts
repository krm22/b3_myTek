import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';



import { AboutPage } from '../pages/about/about.component';
import { ContactPage } from '../pages/contact/contact.component';
import { HomePage } from '../pages/home/home.component';
import { TabsPage } from '../pages/tabs/tabs.component';
import { WelcomePage } from '../pages/welcome/welcome.component';
import { SignupPage } from '../pages/signup/signup.component';
import { LoginPage } from '../pages/login/login.component';

import { RestProvider } from './providers/rest.provider';
import { AuthProvider } from './providers/auth.provider';
import { LoginMessageProvider } from './providers/loginMessage.provider'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SignupPage,
    LoginPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SignupPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestProvider,
    AuthProvider,
    LoginMessageProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
