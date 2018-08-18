import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  private candidates: Array<object> = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.getCandidates();
  }

  private getCandidates() {
    this.apiService.getCandidates().subscribe((data:  Array<object>) => {
      this.candidates  =  data;
  });
  }

  onSubmit(f: NgForm) {
    
    this.createCandidate(f.value);
    
  }

  private createCandidate(candidate) {
    this.apiService.createCandidate(candidate).subscribe((response) => {
    });
    
    this.getCandidates();
   }

}
