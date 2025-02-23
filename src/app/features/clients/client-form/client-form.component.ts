import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../../core/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../../../shared/models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  standalone: false
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;
  isEditMode = false;
  phoneNumber: string | null = null;
  isActiveOptions = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },
  ];
  chatHandoverOptions = [
    { label: 'Human', value: true }, // true = Human
    { label: 'Bot', value: false }, // false = Bot
  ];

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      isActive: [true, Validators.required], // Default to Active
      chatHandover: [false], // Default to Bot
    });
  }

  ngOnInit(): void {
    this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber');
    if (this.phoneNumber) {
      this.isEditMode = true;
      this.clientService.getClients().subscribe((clients) => {
        const client = clients.find((c) => c.phoneNumber === this.phoneNumber);
        if (client) {
          this.clientForm.patchValue(client);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const client: Client = this.clientForm.value;
      if (this.isEditMode) {
        this.clientService.updateClient(client.phoneNumber, client).subscribe(() => {
          this.router.navigate(['/clients']);
        });
      } else {
        this.clientService.addClient(client).subscribe(() => {
          this.router.navigate(['/clients']);
        });
      }
    }
  }
}
