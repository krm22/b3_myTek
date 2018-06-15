import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {CredentialsProvider  } from '../credentials.provider'
import { RequiredValidator } from '@angular/forms';



@Injectable()
export class TokenInterceptorProvider implements HttpInterceptor {

  constructor(public auth: CredentialsProvider) {
    console.log('Hello TokenInterceptorProvider Provider');
  }
intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {

  const token: string =  this.auth.getToken();
  let apiUrl: string = "localhost:9999/api";
  let mdbUrl: string = "https://api.themoviedb.org/"

  if(token && req.url.includes(apiUrl)){
  let tokenRequest = req.clone({
   setHeaders: { Authorization: `Bearer ${token}`}
  })
    return next.handle(tokenRequest);
  }else{
    return next.handle(req)
  }
 
}

}



