import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';
import { LoginMessageProvider } from '../providers/loginMessage.provider';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthProvider {

  currentUser: User;

  private registerUrl = 'http://localhost:9999/api/users/register'
  private loginUrl = 'http://localhost:9999/api/users/login';


  constructor(
    public http: HttpClient,
    public authMessage: LoginMessageProvider,
  ) {
    console.log('Hello Authentification Provider');
  }

  public signUp(credentials) : Observable<User> {
    return Observable.create(observer => {
      this.http.post(this.registerUrl, {
        email_user: credentials.email,
        password_user: credentials.password,
        firstname_user: credentials.firstname,
        surname_user: credentials.surname,
      }, { observe: 'response' })
        .subscribe(
          res => {
            this.currentUser = new User(credentials.email, credentials.password, credentials.firstname, credentials.surname);
            console.log(this.currentUser)
            observer.next(true);
            observer.complete();
            console.log(res)
          },
          err => {
            if (err.status === 400) {
              this.authMessage.showPopup('Sign-up Unsuccessful', 'User already exists or invalid email')
              observer.next(false)
            } else if (err.status === 500) {
              this.authMessage.showPopup('Sign-up Unsuccessful', 'User already exists or invalid email')
            }
            observer.complete();
          });
    });
  }


  public login(credentials) : Observable<User> {
    return Observable.create(observer => {
      this.http.post(this.loginUrl, {
        email_user: credentials.email,
        password_user: credentials.password
      }, { observe: 'response' })
        .subscribe(
          res => {
            this.currentUser = new User(credentials.email, credentials.password, credentials.firstname, credentials.surname );
            observer.next(true);
          },
          err => {
            if (err.status === 403) {
              this.authMessage.showPopup('Login Unsuccessful', 'Your password is invalid')
              observer.next(false);
            } else if (err.status === 500) {
              this.authMessage.showPopup('Login Unsuccessful', 'Unable to verify user')
              observer.next(false);
            } else if (err.status === 400) {
              this.authMessage.showPopup('Login Unsuccessful', 'User does not exist')
              observer.next(false);
            }
            observer.complete();
          });
    });
  }


  public getUserInfo(): User {
    return this.currentUser;
  }


  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }


}



