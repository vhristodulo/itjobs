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

  categories = [];
  types = [];
  locations = []

  constructor( private jobsService: JobsService, private router: Router ) {
    this.jobsService.getJobsCategories().subscribe( categories => { this.categories = categories.data; });
    this.jobsService.getJobsTypes().subscribe( types => { this.types = types.data; });
    this.jobsService.getJobsLocations().subscribe( locations => { this.locations = locations.data; });
  }

  ngOnInit() {
    let date = new Date();
    let currentDate = date.toISOString().slice(0, 10);

    this.addJobForm = new FormGroup({
      'title' : new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(255)]),
      'description' : new FormControl(null, Validators.required),
      'job_category_id' : new FormControl('', Validators.required),
      'job_type_id' : new FormControl('', Validators.required),
      'job_location_id' : new FormControl('', Validators.required),
      'job_company_id' : new FormControl('1'),
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'link' : new FormControl(null),
      'application_deadline' : new FormControl(currentDate)
    });
  }

  onSubmit() {
    if (this.addJobForm.valid) {
      this.jobsService.saveJob(this.addJobForm.value);
      this.router.navigate(['/jobs'], {state: { added: true, subscribed: false }});
    }
  }

}
