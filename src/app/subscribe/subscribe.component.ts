import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobsService } from '../services/jobs/jobs.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})

export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;

  constructor( private jobsService: JobsService, private router: Router ) { }

  ngOnInit() {
    this.subscribeForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      this.jobsService.saveMail(this.subscribeForm.value);
      this.router.navigate(['/jobs/all'], {state: { added: false, subscribed: true }});
    }
  }

}
