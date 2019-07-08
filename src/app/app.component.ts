import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  loggedIn: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  onLogin() {
    this.loggedIn = this.authService.login();
  }
  onLogout() {
    this.loggedIn = this.authService.logout();
  }
}
