import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsService } from './clients.service';
import { RegisterClientComponent } from './register-client/register-client.component';
import { FormsModule } from '@angular/forms';
import { ClientsListComponent } from './clients-list/clients-list.component';

@NgModule({
  declarations: [RegisterClientComponent, ClientsListComponent],
  imports: [CommonModule, FormsModule],
  providers: [ClientsService],
  exports: [RegisterClientComponent, ClientsListComponent],
})
export class ClientsModule {}
