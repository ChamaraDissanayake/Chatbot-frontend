import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from '../../shared/models/template.model';
import { BaseUrl } from '../../shared/utils/constants/base-url';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private apiUrl = `${BaseUrl}/templates`;

  constructor(private http: HttpClient) {}

  // Fetch all templates
  getTemplates(): Observable<Template[]> {
    return this.http.get<Template[]>(this.apiUrl);
  }

  // Create a new template
  createTemplate(template: { name: string; content: string }): Observable<Template> {
    return this.http.post<Template>(this.apiUrl, template);
  }

  // Update an existing template
  updateTemplate(id: string, template: { name: string; content: string }): Observable<Template> {
    return this.http.put<Template>(`${this.apiUrl}/${id}`, template);
  }

  // Delete a template
  deleteTemplate(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
