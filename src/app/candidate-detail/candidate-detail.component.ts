import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

import { CandidateListComponent } from '../candidate-list/candidate-list.component'

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  @Input() candidate: any;

  constructor(private apiService: APIService, 
              private listComponent: CandidateListComponent, 
              private _router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    
  }

  deleteCandidate(){
    this.apiService.deleteCandidate(this.candidate.id)
    .subscribe(
      data => {
        this.listComponent.ngOnInit();
      },
      error => console.log(error));
  }

  showTimeSlots() {
    this.dataService.person = this.candidate;
    this._router.navigate(['candidate-timeslots']);
  }

}



