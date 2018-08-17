import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService } from '../api.service';
import { CandidateListComponent } from '../candidate-list/candidate-list.component'

@Component({
  selector: 'app-candidate-update',
  templateUrl: './candidate-update.component.html',
  styleUrls: ['./candidate-update.component.css']
})
export class CandidateUpdateComponent implements OnInit {

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: APIService,  private listComponent: CandidateListComponent) { }

  @Input() candidate: any;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [this.candidate.id],
      email: [this.candidate.email, Validators.required],
      first_name: [this.candidate.first_name, Validators.required],
      last_name: [this.candidate.last_name, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.apiService.updateCandidate(this.editForm.value)
      .subscribe(
        data => {
        },
        error => {
          console.log(error);
        });

      this.listComponent.ngOnInit();
  }

}
