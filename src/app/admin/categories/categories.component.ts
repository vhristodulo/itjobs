import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [];
  loaded = false;

  constructor( private jobsService: JobsService ) { }

  ngOnInit() {
    this.jobsService.getJobsCategories().subscribe( categories => { this.categories = categories.data; this.loaded = true; });
  }

  onDelete(id: string) {
    this.jobsService.deleteCategory(id);
    var index = this.categories.map(x => {
      return x.id;
    }).indexOf(id);
    
    this.categories.splice(index, 1);
  }

}
