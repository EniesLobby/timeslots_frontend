import { Component, Input, EventEmitter, Output, OnChanges, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-interviewer-time-slots',
  templateUrl: './interviewer-time-slots.component.html',
  styleUrls: ['./interviewer-time-slots.component.css']
})
export class InterviewerTimeSlotsComponent implements OnInit {

  interviewer_id = 1;
  interviewer: any;
  p: number = 1;
  errorMessage: String;

  private interviewers_timeslots: Array<object> = [];

  constructor(private apiService: APIService, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.getInterviewersTimeSlots();
  }
  

  private getInterviewersTimeSlots() {
    this.interviewer = this.dataService.person;
    this.apiService.getInterviewerTimeslots(this.interviewer.id).subscribe((data:  Array<object>) => {
    this.interviewers_timeslots  =  data;
    });
  }

  onSubmit(f: NgForm) {

    let dates_start = f.value.start_date.split(" ");
    let dates_end = f.value.end_date.split(" "); 

    this.createInterviewerTimeslot(f.value);
  }

  private createInterviewerTimeslot(timeslot) {
    this.apiService.createInterviewerTimeslot(this.interviewer.id, timeslot).subscribe((response) => {
    });
    this.getInterviewersTimeSlots();
   }

}
