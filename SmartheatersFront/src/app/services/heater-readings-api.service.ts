import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReadingsDto } from '../models/Reading';

@Injectable({
  providedIn: 'root',
})
export class HeaterReadingsApiService {
  constructor(private http: HttpClient) {}

  getReadings(heaterId: number): Observable<ReadingsDto[]> {
    return this.http.get<ReadingsDto[]>(
      `https://localhost:44347/api/heaterReading/${heaterId}`
    );
  }
}
