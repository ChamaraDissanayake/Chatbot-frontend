import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clients',
    loadChildren: () => import('./features/clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./features/messages/messages.module').then(m => m.MessagesModule)
  },
  {
    path: 'schedules',
    loadChildren: () => import('./features/schedules/schedules.module').then(m => m.SchedulesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
