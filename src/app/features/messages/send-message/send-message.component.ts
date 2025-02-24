import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../core/services/message.service';
import { TemplateService } from '../../../core/services/template.service';
import { ClientService } from '../../../core/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Template } from '../../../shared/models/template.model';
import { Client } from '../../../shared/models/client.model';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
  standalone: false
})
export class SendMessageComponent implements OnInit {
  messageForm: FormGroup;
  templates: Template[] = []; // Store the list of templates
  phoneNumber: string | null = null;
  client: Client | null = null;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private templateService: TemplateService,
    private clientService: ClientService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.messageForm = this.fb.group({
      to: ['', Validators.required],
      body: ['', Validators.required],
      template: [''], // Add a form control for the template dropdown
    });
  }

  ngOnInit(): void {
    this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber');
    if (this.phoneNumber) {
      this.messageForm.patchValue({ to: this.phoneNumber });

      // Fetch client details based on the phone number
      this.clientService.getClients().subscribe((clients) => {
        const client = clients.find((c) => c.phoneNumber === this.phoneNumber);
        if (client) {
          this.client = client
        }
      });
    }

    // Fetch templates from the backend
    this.templateService.getTemplates().subscribe((templates) => {
      this.templates = templates;
    });
  }

  // Send a custom message
  sendMessage(): void {
    if (this.messageForm.valid) {
      const { to, body } = this.messageForm.value;
      this.messageService.sendMessage(to, body).subscribe(() => {
        alert('Message sent successfully!');
        this.router.navigate(['/messages', to]);
      });
    }
  }

  // Populate the message body with the selected template
  onTemplateSelect(): void {
    const selectedTemplateId = this.messageForm.get('template')?.value;
    const selectedTemplate = this.templates.find((t) => t.id === selectedTemplateId);
    if (selectedTemplate && this.client) {
      const messageBody = selectedTemplate.content.replace('[Client\'s Name]', this.client.name);
      this.messageForm.patchValue({ body: messageBody });
    }
  }

  // Cancel and navigate back to the client list
  cancel(): void {
    this.router.navigate(['/clients']);
  }
}
