import { API_CONFIG } from './../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Degree } from '../models/degree';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  constructor(private http: HttpClient) { }

  findByCode(code : string) : Observable<Degree> {
    return this.http.get<Degree>(`${API_CONFIG.baseUrl}/degree/${code}`);
  }

  findByStudentAndTeam(studentId : number, teamId: number) : Observable<Degree> {
    return this.http.get<Degree>(`${API_CONFIG.baseUrl}/degree/student/${studentId}/team/${teamId}`);
  }

  create(degreeCreate : {studentId: number, teamId: number}) : Observable<Degree> {
    return this.http.post<Degree>(`${API_CONFIG.baseUrl}/degree`, degreeCreate);
  }
}
