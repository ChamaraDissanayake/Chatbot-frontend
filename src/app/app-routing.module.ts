import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clients',
    loadChildren: () => import('./features/clients/clients.module').then(m => m.ClientsModule),
  },
  {
    path: 'messages',
    loadChildren: () => import('./features/messages/messages.module').then(m => m.MessagesModule),
  },
  { path: '', redirectTo: '/clients', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/clients' }, // Fallback route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
