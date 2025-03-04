import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessageLogComponent } from './message-log/message-log.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleMessageComponent } from './schedule-message/schedule-message.component';
import { ScheduledMessagesListComponent } from './scheduled-messages-list/scheduled-messages-list.component';

@NgModule({
  declarations: [
    MessageLogComponent,
    SendMessageComponent,
    ScheduleMessageComponent,
    ScheduledMessagesListComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class MessagesModule { }
