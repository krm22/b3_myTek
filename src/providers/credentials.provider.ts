import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class CredentialsProvider {



  constructor() {
    console.log('Hello RestProvider Provider');
  }

  public getToken(){
   return localStorage.getItem('token')
  }

}
