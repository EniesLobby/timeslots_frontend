import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerDetailComponent } from './interviewer-detail.component';

describe('InterviewerDetailComponent', () => {
  let component: InterviewerDetailComponent;
  let fixture: ComponentFixture<InterviewerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
