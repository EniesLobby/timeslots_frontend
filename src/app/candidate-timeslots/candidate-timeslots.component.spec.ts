import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTimeslotsComponent } from './candidate-timeslots.component';

describe('CandidateTimeslotsComponent', () => {
  let component: CandidateTimeslotsComponent;
  let fixture: ComponentFixture<CandidateTimeslotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateTimeslotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateTimeslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
