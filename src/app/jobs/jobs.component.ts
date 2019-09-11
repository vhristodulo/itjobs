import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobsService } from '../services/jobs/jobs.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { fade } from '../animations/animations';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  animations: [ fade ]
})

export class JobsComponent implements OnInit, OnDestroy {

  jobs = [];
  
  types = [];
  categories = [];
  locations = [];

  title: string;
  categoryId: string;
  paramSubscription: Subscription;
  loaded = false;
  showAddedSuccessMessage = false;
  showSubscribedSuccessMessage = false;

  constructor( private router: Router, private route: ActivatedRoute, private jobsService: JobsService) {
    if (this.router.getCurrentNavigation().extras.state != undefined) {
      this.showAddedSuccessMessage = this.router.getCurrentNavigation().extras.state.added;
      this.showSubscribedSuccessMessage = this.router.getCurrentNavigation().extras.state.subscribed;
    }
    this.jobsService.getJobsCategories().subscribe( categories => { this.categories = categories.data.data; });
    this.jobsService.getJobsLocations().subscribe( locations => { this.locations = locations.data.data; });
    this.jobsService.getJobsTypes().subscribe( types => { this.types = types.data.data; });
  }

  ngOnInit() {
    this.title = 'Svi poslovi';
    this.jobsService.getAllJobs().subscribe( jobs => { this.jobs = jobs.data.data; this.loaded = true; });
    /*
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.categoryId = params['categoryId'];
        this.loaded = false;
        this.jobs = [];
        if (this.categoryId == 'all') {
          this.title = 'Svi poslovi';
          this.jobsService.getAllJobs().subscribe( jobs => { this.jobs = jobs.data.data; this.loaded = true; });
        } else {
          this.showAddedSuccessMessage = false;
          this.showSubscribedSuccessMessage = false;
          this.title = 'Poslovi - ' + this.categories[this.categoryId];
          this.jobsService.getJobsByCategory(this.categoryId).subscribe( jobs => { this.jobs = jobs.data.data; this.loaded = true; });
        }
      }
    );
    */
  }

  ngOnDestroy() {
    // this.paramSubscription.unsubscribe();
  }

}
