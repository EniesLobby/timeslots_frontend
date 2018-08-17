import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesTimeslotDetailComponent } from './candidates-timeslot-detail.component';

describe('CandidatesTimeslotDetailComponent', () => {
  let component: CandidatesTimeslotDetailComponent;
  let fixture: ComponentFixture<CandidatesTimeslotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesTimeslotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesTimeslotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
