import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor( private jobsService: JobsService, private router: Router ) { }

  ngOnInit() {
    this.categoryForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      this.jobsService.saveCategory(this.categoryForm.value).subscribe(responseData => {
        this.router.navigate(['/admin/categories']);
      });
    }
  }

}
