import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService } from '../api.service';
import { InterviewerTimeSlotsComponent } from '../interviewer-time-slots/interviewer-time-slots.component'

@Component({
  selector: 'app-interviewers-timeslot-detail-update',
  templateUrl: './interviewers-timeslot-detail-update.component.html',
  styleUrls: ['./interviewers-timeslot-detail-update.component.css']
})
export class InterviewersTimeslotDetailUpdateComponent implements OnInit {

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: APIService,  private listComponent: InterviewerTimeSlotsComponent) { }


  @Input() interviewers_timeslot: any;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [this.interviewers_timeslot.id],
      interviewer: [this.interviewers_timeslot.interviewer],
      start_date: [this.interviewers_timeslot.start_date, Validators.required],
      end_date: [this.interviewers_timeslot.end_date, Validators.required]
    });
  }

  onSubmit() {
    this.apiService.updateInterviewerTimeslot(this.editForm.value)
      .subscribe(
        data => {
        },
        error => {
          console.log(error);
        });

      this.listComponent.ngOnInit();
  }

}
