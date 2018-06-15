import { Injectable } from '@angular/core';

@Injectable()
export class CredentialsProvider {

  constructor() {
  }

  public getToken(){
   return localStorage.getItem('token')
  }

  public setUserToken(user){
   localStorage.setItem('token', user)
  }

  public destroyToken(){
    localStorage.setItem('token',null)
  }
}
