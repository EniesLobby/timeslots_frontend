import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

import { InterviewerListComponent } from '../interviewer-list/interviewer-list.component'

@Component({
  selector: 'app-interviewer-detail',
  templateUrl: './interviewer-detail.component.html',
  styleUrls: ['./interviewer-detail.component.css']
})
export class InterviewerDetailComponent implements OnInit {

  @Input() interviewer: any;

  constructor(private apiService: APIService, 
              private listComponent: InterviewerListComponent, 
              private _router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    
  }

  deleteInterviewer() {
    this.apiService.deleteInterviewer(this.interviewer.id)
    .subscribe(
      data => {
        this.listComponent.ngOnInit();
      },
      error => console.log(error));
  }

  showTimeSlots() {
    this.dataService.person = this.interviewer;
    this._router.navigate(['interviewer-timeslots']);
  }

}


