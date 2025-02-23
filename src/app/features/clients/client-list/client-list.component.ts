import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../core/services/client.service';
import { Client } from '../../../shared/models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  standalone: false,
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  deleteClient(phoneNumber: string): void {
    this.clientService.deleteClient(phoneNumber).subscribe(() => {
      this.loadClients();
    });
  }

  toggleActiveStatus(client: Client): void {
    client.isActive = !client.isActive;
    this.clientService.updateClient(client.phoneNumber, client).subscribe(() => {
      this.loadClients();
    });
  }

  toggleChatHandover(client: Client): void {
    client.chatHandover = !client.chatHandover;
    this.clientService.updateClient(client.phoneNumber, client).subscribe(() => {
      this.loadClients();
    });
  }
}
