import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  { path: '', component: TemplateListComponent }, // Route for template list
  { path: 'add', component: TemplateFormComponent }, // Route for adding a template
  { path: 'edit/:id', component: TemplateFormComponent }, // Route for editing a template
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {}
