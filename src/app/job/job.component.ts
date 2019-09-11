import { JobsService } from '../services/jobs/jobs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})

export class JobComponent implements OnInit {

  job: Object;
  loaded = false;

  types: Object;
  categories: Object;
  locations: Object;

  constructor( private route: ActivatedRoute, private jobsService: JobsService ) {
    this.jobsService.getJobsCategories().subscribe( categories => { this.categories = categories; });
    this.jobsService.getJobsLocations().subscribe( locations => { this.locations = locations; });
    this.jobsService.getJobsTypes().subscribe( types => { this.types = types; });
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.jobsService.getJobById(id).subscribe( job => {
      job.data.description = job.data.description.replace(/\n/g,'<br>');
      this.job = job.data;
      this.loaded = true;
    });
    this.jobsService.updateViews(id);
  }

}
