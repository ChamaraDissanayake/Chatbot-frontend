import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../../core/services/schedule.service';
import { Schedule } from '../../../shared/models/schedule.model';

@Component({
  selector: 'app-scheduled-messages-list',
  templateUrl: './scheduled-messages-list.component.html',
  styleUrls: ['./scheduled-messages-list.component.scss'],
  standalone: false
})
export class ScheduledMessagesListComponent implements OnInit {
  scheduledMessages: Schedule[] = [];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.loadFutureScheduledMessages();
    console.log('Schedule messages');

  }

  loadFutureScheduledMessages(): void {
    this.scheduleService.getScheduledMessages().subscribe((data) => {
      this.scheduledMessages = data;
    });
  }

  cancelScheduledMessage(jobId: string): void {
    this.scheduleService.cancelScheduledMessage(jobId).subscribe(() => {
      this.loadFutureScheduledMessages(); // Refresh the list after cancellation
    });
  }
}
