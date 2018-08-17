import { Component, OnInit, Input, Output } from '@angular/core';
import { APIService } from '../api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { InterviewerTimeSlotsComponent } from '../interviewer-time-slots/interviewer-time-slots.component'


@Component({
  selector: 'app-interviewers-timeslot-detail',
  templateUrl: './interviewers-timeslot-detail.component.html',
  styleUrls: ['./interviewers-timeslot-detail.component.css']
})
export class InterviewersTimeslotDetailComponent implements OnInit {

  @Input() interviewers_timeslot: any;

  constructor(private apiService: APIService,
    private _router: Router,
    private dataService: DataService,
    private listComponent: InterviewerTimeSlotsComponent) { }

  ngOnInit() {
  }

  deleteInterviewerTimeslot() {
    this.apiService.deleteInterviewerTimeslot(this.interviewers_timeslot.id)
    .subscribe(
      data => {
        this.listComponent.ngOnInit();
      },
      error => console.log(error));
  }

}
