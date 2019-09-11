import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class JobsService {

  server = 'http://192.168.48.33/api/public';
  // server = 'https://it-jobs.000webhostapp.com/api/public';

  constructor( private http: HttpClient ) { }

  getAllJobs() {
    return this.http.get(this.server + '/jobs')
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
  }

  getJobById(id: string) {
    return this.http.get(this.server + '/jobs/' + id)
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
  }

  getJobsByCategory(categoryId: string) {
    return this.http.get(this.server + '/jobs?categoryId=' + categoryId)
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
  }

  getJobsLocations() {
    return this.http.get(this.server + '/locations')
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
  }

  getJobLocationById(id: string) {
    return this.http.get(this.server + '/locations/' + id)
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
  }

  saveLocation(locationData) {
    return this.http.post(this.server + '/locations', locationData);
  }

  updateLocation(locationData) {
    return this.http.put(this.server + '/locations', locationData);
  }

  deleteLocation(id: string) {
    this.http.delete(this.server + '/locations/' + id).subscribe(responseData => {});
  }

  getJobsTypes() {
    return this.http.get(this.server + '/types')
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
  }

  getJobTypeById(id: string) {
    return this.http.get(this.server + '/types/' + id)
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
  }

  saveType(typeData) {
    return this.http.post(this.server + '/types', typeData);
  }

  updateType(typeData) {
    return this.http.put(this.server + '/types', typeData);
  }

  deleteType(id: string) {
    this.http.delete(this.server + '/types/' + id).subscribe(responseData => {});
  }

  getJobsCategories() {
    return this.http.get(this.server + '/categories')
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
  }

  getJobCategoryById(id: string) {
    return this.http.get(this.server + '/categories/' + id)
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
  }

  saveCategory(categoryData) {
    return this.http.post(this.server + '/categories', categoryData);
  }

  updateCategory(categoryData) {
    return this.http.put(this.server + '/categories', categoryData);
  }

  deleteCategory(id: string) {
    this.http.delete(this.server + '/categories/' + id).subscribe(responseData => {});
  }

  saveJob(jobData) {
    this.http.post(this.server + '/jobs', jobData).subscribe(responseData => {});
  }

  saveMail(mailData) {
    this.http.post(this.server + '/subscribe', mailData).subscribe(responseData => {});
  }

  getAllMails() {
    return this.http.get(this.server + '/emails')
      .pipe(map(responseData => {
        return JSON.parse(JSON.stringify(responseData));
      }));
  }

  deleteMail(id: string) {
    this.http.delete(this.server + '/emails/' + id).subscribe(responseData => {});
  }

  updateViews(id: string) {
    return this.http.get(this.server + '/jobs/' + id).subscribe(job => {
      this.http.patch(this.server + '/jobs/' + id, {'views':++job['data']['views']}).subscribe(responseData => {});
    });
  }

}
