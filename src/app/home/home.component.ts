import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs/jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  highlightedJobs = [];
  highlightedLoaded = false;

  mostViewedJobs = [];
  mostViewedLoaded = false;

  mostRecentJobs = [];
  mostRecentLoaded = false

  types: Object;
  categories: Object;
  locations: Object;

  constructor( private jobsService: JobsService) {
    this.jobsService.getJobsCategories().subscribe( categories => { this.categories = categories; });
    this.jobsService.getJobsLocations().subscribe( locations => { this.locations = locations; });
    this.jobsService.getJobsTypes().subscribe( types => { this.types = types; });
  }

  ngOnInit() {
    this.jobsService.getHighlightedJobs().subscribe( jobs => { this.highlightedJobs = jobs; this.highlightedLoaded = true; });
    this.jobsService.getMostViewedJobs().subscribe( jobs => { this.mostViewedJobs = jobs; this.mostViewedLoaded = true; });
    this.jobsService.getMostRecentJobs().subscribe( jobs => { this.mostRecentJobs = jobs; this.mostRecentLoaded = true; });
  }

}
