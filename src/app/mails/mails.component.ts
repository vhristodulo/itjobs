import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs/jobs.service';
import { fade } from '../animations/animations';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css'],
  animations: [ fade ]
})

export class MailsComponent implements OnInit {

  mails = [];
  loaded = false;

  constructor( private jobsService: JobsService ) { }

  ngOnInit() {
    this.jobsService.getAllMails().subscribe( mails => { this.mails = mails.data.data; this.loaded = true; });
  }

  onDeleteMail(id: string) {
    this.jobsService.deleteMail(id);
    var index = this.mails.map(x => {
      return x.id;
    }).indexOf(id);
    
    this.mails.splice(index, 1);
  }

}
