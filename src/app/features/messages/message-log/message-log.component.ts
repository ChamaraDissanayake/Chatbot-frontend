import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../core/services/message.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../../../shared/models/message.model';

@Component({
  selector: 'app-message-log',
  templateUrl: './message-log.component.html',
  styleUrls: ['./message-log.component.scss'],
  standalone: false
})
export class MessageLogComponent implements OnInit {
  messages: Message[] = [];
  phoneNumber: string | null = null;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber');
    if (this.phoneNumber) {
      this.loadChatHistory(this.phoneNumber);
    }
  }

  loadChatHistory(phoneNumber: string): void {
    this.messageService.getChatHistory(phoneNumber).subscribe((data) => {
      this.messages = data;
      console.log(
        "Chamara", this.messages

      );

    });
  }
}
