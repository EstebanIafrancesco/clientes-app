import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client, Group } from '../client.model';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],
})
export class RegisterClientComponent implements OnInit {
  client: Client;
  groups: Group[];
  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.client = this.clientsService.newClient();
    this.groups = this.clientsService.getGroups();
  }
  newClient(): void {
    this.clientsService.addClient(this.client);
    this.client = this.clientsService.newClient();
  }
}
