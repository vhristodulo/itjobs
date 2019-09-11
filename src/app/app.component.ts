import { AuthService } from './services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  loggedIn;
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService, private ss: SharedService) { }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required),
    });
  }

  login() {
    this.loggedIn = this.authService.login({"email":"admin","password":"admin"});
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(data => {
        if (data.status.success) {
          localStorage.setItem('token', data.data.token);
          this.loggedIn = true;
          document.getElementById("close").click();
          this.loginForm.reset();
        } else {
          this.loggedIn = false;
          // write error message //
        }
      });
    }
  }

  onLogout() {
    this.loggedIn = this.authService.logout();
    this.router.navigate(['/jobs'], {state: { added: false, subscribed: false }});
  }
}
