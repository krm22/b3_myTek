import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {CredentialsProvider  } from '../credentials.provider'
/*
  Generated class for the TokenInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenInterceptorProvider implements HttpInterceptor {

  constructor(public auth: CredentialsProvider) {
    console.log('Hello TokenInterceptorProvider Provider');
  }
intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
  let tokenRequest = req.clone({
    headers: req.headers.set('Authorization', `${this.auth.getToken()}`)
  })
  return next.handle(tokenRequest)
}

}
