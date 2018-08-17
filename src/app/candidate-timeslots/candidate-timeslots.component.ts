import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidate-timeslots',
  templateUrl: './candidate-timeslots.component.html',
  styleUrls: ['./candidate-timeslots.component.css']
})
export class CandidateTimeslotsComponent implements OnInit {

  candidate: any;
  p: number = 1;

  private candidates_timeslots: Array<object> = [];

  constructor(private apiService: APIService, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.getCandidateTimeslots();
  }

  private getCandidateTimeslots() {
    this.candidate = this.dataService.person;
    console.log(this.candidate);
    this.apiService.getCandidateTimeslots(this.candidate.id).subscribe((data:  Array<object>) => {
    this.candidates_timeslots  =  data;
  });
  }

  onSubmit(f: NgForm) {
    this.createCandidateTimeslot(f.value);
    this.getCandidateTimeslots();
  }

  private createCandidateTimeslot(timeslot) {
    console.log(this.candidate.id, timeslot);
    this.apiService.createCandidateTimeslot(this.candidate.id, timeslot).subscribe((response) => {
    });
    this.getCandidateTimeslots();
   }


}

