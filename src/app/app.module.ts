import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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

import { TokenInterceptorProvider } from '../providers/token-interceptor/token-interceptor';
import { CredentialsProvider } from '../providers/credentials.provider';




@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicImageLoader.forRoot(),
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false, tabsHideOnSubPages: true }),
    ComponentsModule,
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
    CredentialsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackgroundMode,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:  TokenInterceptorProvider,
      multi: true
    },
  ]
})
export class AppModule {}
