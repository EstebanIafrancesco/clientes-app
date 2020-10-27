import { Injectable } from '@angular/core';
import { Client, Group } from './client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private clients: Client[];
  private groups: Group[];
  constructor() {
    this.groups = [
      { id: 0, name: 'Undefined' },
      { id: 1, name: 'Active' },
      { id: 2, name: 'Inactive' },
      { id: 3, name: 'Deptors' },
    ];

    this.clients = [];
  }
  getGroups() {
    return this.groups;
  }
  getClients() {
    return this.clients;
  }
  addClient(client: Client) {
    this.clients.push(client);
  }
  newClient(): Client {
    return {
      id: this.clients.length,
      name: '',
      cif: '',
      adress: '',
      group: 0,
    };
  }
}
