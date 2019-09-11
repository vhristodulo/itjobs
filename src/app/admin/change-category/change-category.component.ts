import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
  selector: 'app-change-category',
  templateUrl: './change-category.component.html',
  styleUrls: ['./change-category.component.css']
})

export class ChangeCategoryComponent implements OnInit {

  category;
  categoryForm: FormGroup;

  constructor( private jobsService: JobsService, private router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.jobsService.getJobCategoryById(id).subscribe(category => {
      this.category = category.data;
      this.categoryForm = new FormGroup({
        'id': new FormControl(id),
        'name' : new FormControl(this.category['name'], Validators.required),
      });
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      this.jobsService.updateCategory(this.categoryForm.value).subscribe(responseData => {
        this.router.navigate(['/admin/categories']);
      })
    }
  }

}
