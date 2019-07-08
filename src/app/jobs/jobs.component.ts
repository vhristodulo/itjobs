import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobsService } from '../services/jobs/jobs.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slide } from '../animations/animations';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  animations: [ slide ]
})

export class JobsComponent implements OnInit, OnDestroy {

  jobs = [];
  
  types: Object;
  categories: Object;
  locations: Object;

  title: string;
  category: string;
  paramSubscription: Subscription;
  loaded = false;
  showAddedSuccessMessage = false;
  showSubscribedSuccessMessage = false;

  constructor( private router: Router, private route: ActivatedRoute, private jobsService: JobsService) {
    if (this.router.getCurrentNavigation().extras.state != undefined) {
      this.showAddedSuccessMessage = this.router.getCurrentNavigation().extras.state.added;
      this.showSubscribedSuccessMessage = this.router.getCurrentNavigation().extras.state.subscribed;
    }
    this.jobsService.getJobsCategories().subscribe( categories => { this.categories = categories; });
    this.jobsService.getJobsLocations().subscribe( locations => { this.locations = locations; });
    this.jobsService.getJobsTypes().subscribe( types => { this.types = types; });
  }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.category = params['category'];
        this.loaded = false;
        this.jobs = [];
        if (this.category == 'all') {
          this.title = 'Svi poslovi';
          this.jobsService.getAllJobs().subscribe( jobs => { this.jobs = jobs; this.loaded = true; });
        } else {
          this.showAddedSuccessMessage = false;
          this.showSubscribedSuccessMessage = false;
          this.title = 'Poslovi - ' + this.categories[this.category];
          this.jobsService.getJobsByCategory(this.category).subscribe( jobs => { this.jobs = jobs; this.loaded = true; });
        }
      }
    );
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
