import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../shared/models/client.model';
import { BaseUrl } from '../../shared/utils/constants/base-url';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = `${BaseUrl}/clients`;

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  updateClient(phoneNumber: string, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${phoneNumber}`, client);
  }

  deleteClient(phoneNumber: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${phoneNumber}`);
  }
}
