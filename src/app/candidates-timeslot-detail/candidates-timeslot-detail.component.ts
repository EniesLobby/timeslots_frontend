import { Component, OnInit, Input, Output } from '@angular/core';
import { APIService } from '../api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { CandidateTimeslotsComponent } from '../candidate-timeslots/candidate-timeslots.component'


@Component({
  selector: 'app-candidates-timeslot-detail',
  templateUrl: './candidates-timeslot-detail.component.html',
  styleUrls: ['./candidates-timeslot-detail.component.css']
})
export class CandidatesTimeslotDetailComponent implements OnInit {

  @Input() candidates_timeslot: any;

  constructor(private apiService: APIService,
    private _router: Router,
    private dataService: DataService,
    private listComponent: CandidateTimeslotsComponent) { }

  ngOnInit() {
  }

  deleteCandidateTimeslot() {
    this.apiService.deleteInterviewerTimeslot(this.candidates_timeslot.id)
    .subscribe(
      data => {
        this.listComponent.ngOnInit();
      },
      error => console.log(error));
  }

}

