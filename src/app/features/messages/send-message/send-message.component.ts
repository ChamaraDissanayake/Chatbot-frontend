import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../core/services/message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
  standalone: false
})
export class SendMessageComponent {
  messageForm: FormGroup;
  phoneNumber: string | null = null;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.messageForm = this.fb.group({
      to: ['', Validators.required],
      body: ['', Validators.required],
    });
    this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber');
    if (this.phoneNumber) {
      this.messageForm.patchValue({ to: this.phoneNumber });
    }
  }

  sendMessage(): void {
    if (this.messageForm.valid) {
      const { to, body } = this.messageForm.value;
      this.messageService.sendMessage(to, body).subscribe(() => {
        this.router.navigate(['/messages', to]);
      });
    }
  }

  sendTemplateMessage(): void {
    if (this.messageForm.valid) {
      const { to } = this.messageForm.value;
      const clientName = 'Client'; // Replace with actual client name if available
      this.messageService.sendTemplateMessage(to, clientName).subscribe(() => {
        this.router.navigate(['/messages', to]);
      });
    }
  }
}
