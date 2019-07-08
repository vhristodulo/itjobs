import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class JobsService {

  constructor( private http: HttpClient ) { }

  getAllJobs() {
    return this.http.get('https://itjobs-1c71a.firebaseio.com/jobs.json')
      .pipe(map(responseData => {
        const jobs = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            jobs.push({ ...responseData[key], id: key});
          }
        }
        return jobs;
      }));
  }

  getJobById(id: string) {
    return this.http.get('https://itjobs-1c71a.firebaseio.com/jobs.json?orderBy="$key"&equalTo="' + id + '"')
      .pipe(map(responseData => {
        const jobsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            jobsArray.push({ ...responseData[key], id: key});
          }
        }
        return jobsArray[0];
      }));
  }

  getJobsByCategory(category: string) {
    return this.http.get('https://itjobs-1c71a.firebaseio.com/jobs.json?orderBy="category"&equalTo="' + category + '"')
      .pipe(map(responseData => {
        const jobsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            jobsArray.push({ ...responseData[key], id: key});
          }
        }
        return jobsArray;
      }));
  }

  getHighlightedJobs() {
    return this.http.get('https://itjobs-1c71a.firebaseio.com/jobs.json?orderBy="highlighted"&equalTo="1"&limitToFirst=3')
      .pipe(map(responseData => {
        const jobsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            jobsArray.push({ ...responseData[key], id: key});
          }
        }
        return jobsArray;
      }));
  }

  getMostViewedJobs() {
    return this.http.get('https://itjobs-1c71a.firebaseio.com/jobs.json?orderBy="views"&limitToFirst=3')
      .pipe(map(responseData => {
        const jobsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            jobsArray.push({ ...responseData[key], id: key});
          }
        }
        return jobsArray;
      }));
  }

  getMostRecentJobs() {
    return this.http.get('https://itjobs-1c71a.firebaseio.com/jobs.json?orderBy="highlighted"&limitToFirst=3')
      .pipe(map(responseData => {
        const jobsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            jobsArray.push({ ...responseData[key], id: key});
          }
        }
        return jobsArray;
      }));
  }

  getJobsLocations() {
    return this.http.get("./assets/database/locations.json");
  }

  getJobsTypes() {
    return this.http.get("./assets/database/types.json");
  }

  getJobsCategories() {
    return this.http.get("./assets/database/categories.json");
  }

  saveJob(jobData) {
    this.http.post('https://itjobs-1c71a.firebaseio.com/jobs.json', jobData).subscribe(responseData => {});
  }

  saveMail(mailData) {
    this.http.post('https://itjobs-1c71a.firebaseio.com/mails.json', mailData).subscribe(responseData => {});
  }

  getAllMails() {
    return this.http.get('https://itjobs-1c71a.firebaseio.com/mails.json')
      .pipe(map(responseData => {
        const mails = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            mails.push({ ...responseData[key], id: key});
          }
        }
        return mails;
      }));
  }

  deleteMail(id: string) {
    this.http.delete('https://itjobs-1c71a.firebaseio.com/mails/' + id + '.json').subscribe(responseData => {});
  }

  updateViews(id: string) {
    let job = this.http.get('https://itjobs-1c71a.firebaseio.com/jobs/' + id + '.json').subscribe(job => {
      this.http.patch('https://itjobs-1c71a.firebaseio.com/jobs/' + id + '.json', {'views':++job['views']}).subscribe(responseData => {});
    });
  }

}
