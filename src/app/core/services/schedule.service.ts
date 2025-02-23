import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../../shared/models/schedule.model';
import { BaseUrl } from '../../shared/utils/constants/base-url';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private apiUrl = `${BaseUrl}/schedule`;

  constructor(private http: HttpClient) {}

  scheduleMessage(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.apiUrl, schedule);
  }

  getScheduledMessages(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.apiUrl);
  }

  cancelScheduledMessage(jobId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${jobId}`);
  }
}
