import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  { path: '', component: ClientListComponent }, // Default route for /clients
  { path: 'add', component: ClientFormComponent }, // Route for adding a new client
  { path: 'edit/:phoneNumber', component: ClientFormComponent }, // Route for editing a client
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
