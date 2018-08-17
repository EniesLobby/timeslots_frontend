import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { APIService } from '../api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-interviewer-list',
  templateUrl: './interviewer-list.component.html',
  styleUrls: ['./interviewer-list.component.css']
})
export class InterviewerListComponent implements OnInit {

  private interviewers: Array<object> = [];

  constructor(private apiService: APIService, private _router: Router) { }

  ngOnInit() {
    this.getInterviewers();
  }

  private getInterviewers() {
    this.apiService.getInterviewers().subscribe((data:  Array<object>) => {
      this.interviewers  =  data;
  });
  }

  onSubmit(f: NgForm) {
    this.createInterviewer(f.value);
    
  }

  private createInterviewer(interviewer) {
    this.apiService.createInterviewer(interviewer).subscribe((response) => {
    });
    this.getInterviewers();
   }

   
}
