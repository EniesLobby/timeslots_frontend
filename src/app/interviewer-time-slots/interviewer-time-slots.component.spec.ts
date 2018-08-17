import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerTimeSlotsComponent } from './interviewer-time-slots.component';

describe('InterviewerTimeSlotsComponent', () => {
  let component: InterviewerTimeSlotsComponent;
  let fixture: ComponentFixture<InterviewerTimeSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerTimeSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerTimeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
