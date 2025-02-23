import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplatesRoutingModule } from './templates-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TemplateListComponent, // Declare the Template List component
    TemplateFormComponent, // Declare the Template Form component
  ],
  imports: [
    CommonModule, // Required for Angular features like *ngIf and *ngFor
    TemplatesRoutingModule, // Import the Templates Routing Module
    FormsModule, // Required for template-driven forms
    ReactiveFormsModule, // Required for reactive forms
  ],
})
export class TemplatesModule {}
