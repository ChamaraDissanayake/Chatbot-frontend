import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Message } from '../../shared/models/message.model';
import { BaseUrl } from '../../shared/utils/constants/base-url';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = `${BaseUrl}/messages`;

  constructor(private http: HttpClient) {}

  sendMessage(to: string, body: string): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}/send`, { to, body });
  }

  sendTemplateMessage(to: string, clientName: string): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}/send-template`, { to, clientName });
  }

  getChatHistory(phoneNumber: string): Observable<Message[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history/${phoneNumber}`).pipe(
      map((messages) =>
        messages.map((message) => ({
          ...message,
          timestamp: new Date(message.timestamp.seconds * 1000) // ✅ Convert Firestore timestamp to JS Date
        }))
      )
    );
  }
}
