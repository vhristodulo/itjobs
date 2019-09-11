import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  server = 'http://192.168.48.33/api/public'
  // server = 'https://it-jobs.000webhostapp.com/api/public';
  loggedIn = false;

  constructor( private http: HttpClient ) { }

  isAuth() {
    this.isLoggedIn();
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  isLoggedIn() {
    this.loggedIn = localStorage.getItem('token') !=  null;
    return this.loggedIn;
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  login(logData) {
    return this.http.post(this.server + '/auth/login', logData)
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
 }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    return this.loggedIn;
  }

}
