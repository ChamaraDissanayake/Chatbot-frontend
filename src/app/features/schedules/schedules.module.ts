import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { ScheduleMessageComponent } from './schedule-message/schedule-message.component';

@NgModule({
  declarations: [
    ScheduleMessageComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule
  ],
  providers: []
})
export class SchedulesModule { }
