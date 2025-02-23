import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplateService } from '../../../core/services/template.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Template } from '../../../shared/models/template.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
  standalone: false
})
export class TemplateFormComponent implements OnInit {
  templateForm: FormGroup;
  isEditMode = false;
  templateId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private templateService: TemplateService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.templateForm = this.fb.group({
      name: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.templateId = this.route.snapshot.paramMap.get('id');
    if (this.templateId) {
      this.isEditMode = true;
      this.templateService.getTemplates().subscribe((templates) => {
        const template = templates.find((t) => t.id === this.templateId);
        if (template) {
          this.templateForm.patchValue(template);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.templateForm.valid) {
      const template = this.templateForm.value;
      if (this.isEditMode && this.templateId) {
        this.templateService.updateTemplate(this.templateId, template).subscribe(() => {
          this.router.navigate(['/templates']);
        });
      } else {
        this.templateService.createTemplate(template).subscribe(() => {
          this.router.navigate(['/templates']);
        });
      }
    }
  }
}
