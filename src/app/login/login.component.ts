import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private authService: AuthService, private router: Router, private ss: SharedService ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let loggedIn = this.authService.login(this.loginForm.value);
      this.ss.change(loggedIn);
      if (loggedIn) {
        this.router.navigate(['/jobs'], {state: { added: false, subscribed: false }});
      }
    }
  }

}
