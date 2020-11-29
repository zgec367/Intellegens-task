import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Heater } from '../models/Heater';

@Injectable({
  providedIn: 'root',
})
export class HeaterApiService {
  constructor(private http: HttpClient) {}

  getSoldHeaters(): Observable<any> {
    return this.http.get('https://localhost:44347/api/heater');
  }
  addSoldHeater(heater: Heater): Observable<any> {
    return this.http.post('https://localhost:44347/api/heater', heater);
  }
  updateHeater(heater: Heater): Observable<any> {
    return this.http.put('https://localhost:44347/api/heater', heater);
  }
  deleteHeater(id: number): Observable<Heater> {
    return this.http.delete<Heater>(`https://localhost:44347/api/heater/${id}`);
  }
}
