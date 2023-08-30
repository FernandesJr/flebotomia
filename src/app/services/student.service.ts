import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  OnInit() {}

  public getStudentsByTeam(idTeam?: number): Observable<any> {
    return this.http.get<any>(`${API_CONFIG.baseUrl}/teams/${idTeam}/students`);
  }

  public findById(id: number): Observable<Student> {
    return this.http.get<Student>(`${API_CONFIG.baseUrl}/students/${id}`);
  }
}