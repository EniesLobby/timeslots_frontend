import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewersTimeslotDetailComponent } from './interviewers-timeslot-detail.component';

describe('InterviewersTimeslotDetailComponent', () => {
  let component: InterviewersTimeslotDetailComponent;
  let fixture: ComponentFixture<InterviewersTimeslotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewersTimeslotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewersTimeslotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
