import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTimeslotsComponent } from './match-timeslots.component';

describe('MatchTimeslotsComponent', () => {
  let component: MatchTimeslotsComponent;
  let fixture: ComponentFixture<MatchTimeslotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchTimeslotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTimeslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
