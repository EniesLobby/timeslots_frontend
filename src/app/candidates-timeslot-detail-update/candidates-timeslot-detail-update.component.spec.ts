import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesTimeslotDetailUpdateComponent } from './candidates-timeslot-detail-update.component';

describe('CandidatesTimeslotDetailUpdateComponent', () => {
  let component: CandidatesTimeslotDetailUpdateComponent;
  let fixture: ComponentFixture<CandidatesTimeslotDetailUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesTimeslotDetailUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesTimeslotDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
