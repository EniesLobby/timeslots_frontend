import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { InterviewerListComponent } from './interviewer-list/interviewer-list.component';
import { InterviewerDetailComponent } from './interviewer-detail/interviewer-detail.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { InterviewerCreateComponent } from './interviewer-create/interviewer-create.component';
import { InterviewerTimeSlotsComponent } from './interviewer-time-slots/interviewer-time-slots.component';
import { CandidateTimeslotsComponent } from './candidate-timeslots/candidate-timeslots.component';
import { InterviewerUpdateComponent } from './interviewer-update/interviewer-update.component';
import { CandidateUpdateComponent } from './candidate-update/candidate-update.component';
import { InterviewersTimeslotDetailComponent } from './interviewers-timeslot-detail/interviewers-timeslot-detail.component';
import { CandidatesTimeslotDetailComponent } from './candidates-timeslot-detail/candidates-timeslot-detail.component';
import { InterviewersTimeslotDetailUpdateComponent } from './interviewers-timeslot-detail-update/interviewers-timeslot-detail-update.component';
import { CandidatesTimeslotDetailUpdateComponent } from './candidates-timeslot-detail-update/candidates-timeslot-detail-update.component';
import { MatchTimeslotsComponent } from './match-timeslots/match-timeslots.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewerListComponent,
    InterviewerDetailComponent,
    CandidateListComponent,
    CandidateDetailComponent,
    InterviewerCreateComponent,
    InterviewerTimeSlotsComponent,
    CandidateTimeslotsComponent,
    InterviewerUpdateComponent,
    CandidateUpdateComponent,
    InterviewersTimeslotDetailComponent,
    CandidatesTimeslotDetailComponent,
    InterviewersTimeslotDetailUpdateComponent,
    CandidatesTimeslotDetailUpdateComponent,
    MatchTimeslotsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
