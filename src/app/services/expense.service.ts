import { Expense } from './../models/expense';
import { API_CONFIG } from '../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  moment: any = require('moment');

  constructor(private http: HttpClient) { }

  create(expense: Expense): Observable<Expense> {
    return this.http.post(`${API_CONFIG.baseUrl}/expense`, expense);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${API_CONFIG.baseUrl}/expense/${id}`);
  }

  update(expense: Expense): Observable<Expense> {
    return this.http.put(`${API_CONFIG.baseUrl}/expense/${expense.id}`, expense);
  }

  findBySearch(dateStart?: string, dateEnd?: string, courseId?: number) : Observable<any> {
    return this.http.get(`${API_CONFIG.baseUrl}/expense/search?course=${courseId != 0 && courseId ? courseId : ''}&start=${dateStart? dateStart: this.getDateTodayMinusOneMonth()}&end=${dateEnd? dateEnd: this.getDateToday()}`);
  }

  private getDateToday(): Date {
    return this.moment().format('YYYY-MM-DD');
  }

  private getDateTodayMinusOneMonth(): any {
    return this.moment().subtract(1, 'months').format('YYYY-MM-DD');
  }
}
