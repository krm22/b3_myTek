import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SignUpUser } from '../models/signUpUser'
import { LoginUser } from '../models/loginUser.model'
import { LoginMessageProvider } from '../providers/loginMessage.provider';

import 'rxjs/add/Observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthProvider {

  currentUser: SignUpUser;
  loginUser: LoginUser;


  private registerUrl = 'http://localhost:9999/api/users/register'
  private loginUrl = 'http://localhost:9999/api/users/login';


  constructor(
    public http: HttpClient,
    public authMessage: LoginMessageProvider,
  ) {
    console.log('Hello Authentification Provider');
  }

  public signUp(credentials): Observable<SignUpUser> {
    console.log("service credentails : ", credentials)
    return this.http.post(this.registerUrl, {
      email_user: credentials.email,
      password_user: credentials.password,
      firstname_user: credentials.firstname,
      surname_user: credentials.surname,
    }, { observe: 'response' })
      .map(res => {
        return this.currentUser = new SignUpUser(credentials.email, credentials.password, credentials.firstname, credentials.surname)
      }).catch((error: any) => {
        if (error.status === 400) {
           Observable.throw(this.authMessage.showPopup('Sign-up Unsuccessful', 'User already exists or invalid email'))
        } else if (error.status === 500) {
          return Observable.throw(this.authMessage.showPopup('Sign-up Unsuccessful', 'Cannot add user or  email'))
        }
        return Observable.throw(error)
      })
  }


  public login(credentials): Observable<LoginUser> {
    return this.http.post(this.loginUrl, {
      email_user: credentials.email,
      password_user: credentials.password
    }, { observe: 'response' })
      .map(res => {
        return this.loginUser = new LoginUser(credentials.email, credentials.password)
      }).catch((error: any) => {
        if (error.status === 403) {
          Observable.throw(this.authMessage.showPopup('Login Unsuccessful', 'Your password is invalid'));
        } else if (error.status === 500) {
          Observable.throw(this.authMessage.showPopup('Login Unsuccessful', 'Unable to verify user'));
        } else if (error.status === 400) {
          Observable.throw( this.authMessage.showPopup('Login Unsuccessful', 'User does not exist'));
        }
        return Observable.throw(error)
      })
    };



  public getUserInfo(): SignUpUser {
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



