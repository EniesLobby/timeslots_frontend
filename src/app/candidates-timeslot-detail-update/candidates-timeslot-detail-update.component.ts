import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService } from '../api.service';
import { CandidateTimeslotsComponent } from '../candidate-timeslots/candidate-timeslots.component'

@Component({
  selector: 'app-candidates-timeslot-detail-update',
  templateUrl: './candidates-timeslot-detail-update.component.html',
  styleUrls: ['./candidates-timeslot-detail-update.component.css']
})
export class CandidatesTimeslotDetailUpdateComponent implements OnInit {

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: APIService,  private listComponent: CandidateTimeslotsComponent) { }


  @Input() candidates_timeslot: any;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [this.candidates_timeslot.id],
      candidate: [this.candidates_timeslot.candidate],
      start_date: [this.candidates_timeslot.start_date, Validators.required],
      end_date: [this.candidates_timeslot.end_date, Validators.required]
    });
  }

  onSubmit() {
    this.apiService.updateCandidateTimeslot(this.editForm.value)
      .subscribe(
        data => {
        },
        error => {
          console.log(error);
        });

      this.listComponent.ngOnInit();
  }

}

