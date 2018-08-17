import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService } from '../api.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-match-timeslots',
  templateUrl: './match-timeslots.component.html',
  styleUrls: ['./match-timeslots.component.css']
})
export class MatchTimeslotsComponent implements OnInit {

  private candidates: Array<object> = [];
  private interviewers: Array<object> = [];
  private interviewers_choosen: Array<object> = [];
  private timeslots: Array<object> = [];

  constructor(private formBuilder: FormBuilder, private apiService: APIService) { }

  editForm: FormGroup;
  sm: boolean = false;

  ngOnInit() {

    this.getCandidatesList();
    this.getInterviewersList();

    this.editForm = this.formBuilder.group({
      id: [],
      interviewers: ['', Validators.required],
      smcheck: ['', Validators.required],
      candidate: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.getMatches();
  }

  private getInterviewersList() {
    this.apiService.getInterviewers().subscribe((data:  Array<object>) => {
      this.interviewers  =  data;
      console.log(this.interviewers);
    });
  }

  private getCandidatesList() {
    this.apiService.getCandidates().subscribe((data:  Array<object>) => {
      this.candidates  =  data;
      console.log(this.candidates);
    });
  }

  private getMatches() {

    let ids: string = "";
    let start_date: string = '2012-08-01';
    let end_date: string = '2022-08-01';
    let shift: number;
    let smcheck: number;

    if( this.editForm.value.smcheck == "") {
      smcheck = 0;
      this.sm = false;
    } else {
      smcheck = 1;
      this.sm = true;
    }

  
    if(this.editForm.value.start_date == "" && this.editForm.value.end_date == "") {

      let d = new Date();
      shift = d.getDay();
      
      console.log("curernt = ", d.getDay());

      if(shift != 1) {
        start_date = formatDate(new Date().setDate(new Date().getDate() + 8 - shift), 'yyyy-MM-dd', 'en');
        end_date = formatDate(new Date().setDate(new Date().getDate() + 8 - shift + 4), 'yyyy-MM-dd', 'en');
      } else {
        start_date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
        end_date = formatDate(new Date().setDate(new Date().getDate() + 4), 'yyyy-MM-dd', 'en');
      }

    } else {
      start_date = this.editForm.value.start_date;
      end_date = this.editForm.value.end_date;
    }

    console.log(start_date);
    console.log(end_date);
    

    this.interviewers_choosen = this.editForm.value.interviewers;
    console.log(this.interviewers_choosen);

    for(let i = 0; i < this.editForm.value.interviewers.length; i ++ ) {
      if(i == this.editForm.value.interviewers.length - 1) { 
        ids = ids + this.editForm.value.interviewers[i];
      } else {
        ids = ids + this.editForm.value.interviewers[i] + ',';
      }
    }

    this.apiService.getMatches(ids, start_date, end_date, this.editForm.value.candidate, smcheck).subscribe((data:  Array<object>) => {
        this.timeslots  =  data;
    });


  }

}
