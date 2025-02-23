import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientListComponent, ClientFormComponent],
  imports: [CommonModule, ClientsRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class ClientsModule { }
