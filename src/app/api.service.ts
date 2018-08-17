import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  API_URL = "http://127.0.0.1:8000/api";

  constructor(private httpClient: HttpClient) { }

  getInterviewers() {
    return this.httpClient.get(this.API_URL + '/interviewers')
  }

  getCandidates() {
    return this.httpClient.get(this.API_URL + '/candidates')
  }

  getInterviewerTimeslots(id: number) {
    return this.httpClient.get(this.API_URL + '/timeslots/interviewers/' + id)
  }

  getCandidateTimeslots(id: number) {
    return this.httpClient.get(this.API_URL + '/timeslots/candidates/' + id)
  }

  createInterviewer(interviewer: Object) {
    return  this.httpClient.post(`${this.API_URL}/interviewers/`, interviewer);
  }

  createCandidate(candidate: Object) {
    return  this.httpClient.post(`${this.API_URL}/candidates/`, candidate);
  }

  updateInterviewer(interviewer: any) {
    return this.httpClient.put(this.API_URL + '/interviewers/' + interviewer.id, interviewer);
  }

  updateCandidate(candidate: any) {
    return this.httpClient.put(this.API_URL + '/candidates/' + candidate.id, candidate);
  }

  deleteInterviewer(id: number) {
    return this.httpClient.delete(this.API_URL + '/interviewers/' + id, { responseType: 'text' });
  }

  deleteCandidate(id: number) {
    return this.httpClient.delete(this.API_URL + '/candidates/' + id, { responseType: 'text' });
  }

  createInterviewerTimeslot(inverviewer_id: number, timeslot: any) {
   
    let obj = {
      interviewer: inverviewer_id,
      start_date: timeslot.start_date,
      end_date: timeslot.end_date
    }
   
    return  this.httpClient.post(this.API_URL + '/timeslots/interviewers/' + inverviewer_id, obj);
  }

  createCandidateTimeslot(candidate_id: number, timeslot: any) {
   
    let obj = {
      candidate: candidate_id,
      start_date: timeslot.start_date,
      end_date: timeslot.end_date
    }
   
    return  this.httpClient.post(this.API_URL + '/timeslots/candidates/' + candidate_id, obj);
  }

  deleteInterviewerTimeslot(id: number) {
    return this.httpClient.delete(this.API_URL + '/timeslots/' + id + '/interviewers/', { responseType: 'text' });
  }

  deleteCandidateTimeslot(id: number) {
    return this.httpClient.delete(this.API_URL + '/timeslots/' + id + '/candidates/', { responseType: 'text' });
  }

  updateInterviewerTimeslot(timeslot:any) {

    return this.httpClient.put(this.API_URL + '/timeslots/' + timeslot.id + '/interviewers/', timeslot);
  }

  updateCandidateTimeslot(timeslot:any) {
    return this.httpClient.put(this.API_URL + '/timeslots/' + timeslot.id + '/candidates/', timeslot);
  }

  getMatches(interviewer_ids: string, start_date: any, end_date: any, candidate_id: number, smcheck: number ) {
    return this.httpClient.get(this.API_URL + '/timeslots/candidates/' + candidate_id + '/interviewers/?ids=' + interviewer_ids + '&start_date=' + start_date + '&end_date=' + end_date + '&smcheck=' + smcheck )
  }


}
