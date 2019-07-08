import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  loggedIn = false;

  constructor() { }

  isAuth() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
    return this.loggedIn;
  }

}
