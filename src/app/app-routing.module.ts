import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterviewerListComponent } from './interviewer-list/interviewer-list.component';
import { InterviewerDetailComponent } from './interviewer-detail/interviewer-detail.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { InterviewerCreateComponent } from './interviewer-create/interviewer-create.component';
import { InterviewerTimeSlotsComponent } from './interviewer-time-slots/interviewer-time-slots.component';
import { CandidateTimeslotsComponent } from './candidate-timeslots/candidate-timeslots.component';
import { MatchTimeslotsComponent } from './match-timeslots/match-timeslots.component';
 
const routes: Routes = [
    { path:  '', redirectTo:  'accounts', pathMatch:  'full' },
    {
        path:  'interviewers',
        component:  InterviewerListComponent
    },
    {
        path:  'interviewer-detail',
        component:  InterviewerDetailComponent
    },
    {
        path:  'interviewer-timeslots',
        component:  InterviewerTimeSlotsComponent
    },
    {
        path:  'candidate-timeslots',
        component:  CandidateTimeslotsComponent
    },
    {
        path:  'candidates',
        component:  CandidateListComponent
    },
    {
        path:  'match',
        component:  MatchTimeslotsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }