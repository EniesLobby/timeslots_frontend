import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService } from '../api.service';
import { InterviewerListComponent } from '../interviewer-list/interviewer-list.component'

@Component({
  selector: 'app-interviewer-update',
  templateUrl: './interviewer-update.component.html',
  styleUrls: ['./interviewer-update.component.css']
})
export class InterviewerUpdateComponent implements OnInit {

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: APIService,  private listComponent: InterviewerListComponent) { }

  @Input() interviewer: any;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [this.interviewer.id],
      email: [this.interviewer.email, Validators.required],
      first_name: [this.interviewer.first_name, Validators.required],
      last_name: [this.interviewer.last_name, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.apiService.updateInterviewer(this.editForm.value)
      .subscribe(
        data => {
        },
        error => {
          console.log(error);
        });

      this.listComponent.ngOnInit();
  }

}
