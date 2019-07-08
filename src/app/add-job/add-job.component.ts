import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobsService } from '../services/jobs/jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})

export class AddJobComponent implements OnInit {

  addJobForm: FormGroup;

  categories = [
    { text: 'Ostalo', value: 'other' },
    { text: 'Programeri', value: 'developers' },
    { text: 'Dizajneri', value: 'designers' }
  ];

  types = [
    { text: 'Stalni', value: 'permanent' },
    { text: 'Privremeni', value: 'part-time'},
    { text: 'Povremeni', value: 'freelance'}
  ];

  locations = [
    { text: 'Bilo gde', value: 'any' },
    { text: 'Beograd', value: 'Beograd' },
    { text: 'Novi Sad', value: 'Novi Sad' }
  ]

  constructor( private jobsService: JobsService, private router: Router ) { }

  ngOnInit() {
    let date = new Date();
    let currentDate = date.toISOString().slice(0, 10);

    this.addJobForm = new FormGroup({
      'title' : new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(255)]),
      'description' : new FormControl(null, Validators.required),
      'category' : new FormControl('other'),
      'type' : new FormControl('permanent'),
      'location' : new FormControl('any'),
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'link' : new FormControl(null),
      'created' : new FormControl(currentDate),
      'views' : new FormControl('0'),
      'highlighted' : new FormControl('0')
    });
  }

  onSubmit() {
    if (this.addJobForm.valid) {
      this.jobsService.saveJob(this.addJobForm.value);
      this.router.navigate(['/jobs/all'], {state: { added: true, subscribed: false }});
    }
  }

}
