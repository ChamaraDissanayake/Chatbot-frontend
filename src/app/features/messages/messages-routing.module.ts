import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageLogComponent } from './message-log/message-log.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ScheduleMessageComponent } from './schedule-message/schedule-message.component';

const routes: Routes = [
  { path: ':phoneNumber', component: MessageLogComponent }, // Route for message log
  { path: 'send/:phoneNumber', component: SendMessageComponent }, // Route for sending a message
  { path: 'schedule/:phoneNumber', component: ScheduleMessageComponent }, // Route for scheduling a message
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
