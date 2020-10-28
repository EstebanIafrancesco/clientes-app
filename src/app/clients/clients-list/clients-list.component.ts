import { Component, OnInit } from '@angular/core';
import { Client, Group } from './../client.model';
import { ClientsService } from './../clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  clients: Client[];
  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.clients = this.clientsService.getClients();
  }
}
