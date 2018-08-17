import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewersTimeslotDetailUpdateComponent } from './interviewers-timeslot-detail-update.component';

describe('InterviewersTimeslotDetailUpdateComponent', () => {
  let component: InterviewersTimeslotDetailUpdateComponent;
  let fixture: ComponentFixture<InterviewersTimeslotDetailUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewersTimeslotDetailUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewersTimeslotDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
