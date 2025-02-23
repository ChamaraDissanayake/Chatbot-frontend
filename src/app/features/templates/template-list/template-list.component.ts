import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../../core/services/template.service';
import { Template } from '../../../shared/models/template.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
  standalone: false
})
export class TemplateListComponent implements OnInit {
  templates: Template[] = [];

  constructor(private templateService: TemplateService, public router: Router) {}

  ngOnInit(): void {
    this.loadTemplates();
  }

  loadTemplates(): void {
    this.templateService.getTemplates().subscribe((data) => {
      this.templates = data;
    });
  }

  deleteTemplate(id: string): void {
    this.templateService.deleteTemplate(id).subscribe(() => {
      this.loadTemplates(); // Refresh the list after deletion
    });
  }
}
