import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WorkersService, MokaWorkersService } from './service/workers.service';
import { ApiService } from './service/api.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './service/auth.service';
import { TopbarComponent } from './topbar/topbar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsService, MokaTicketsService } from './service/tickets.service'
import { TicketItemComponent } from './ticket-item/ticket-item.component';
import { CustomersService, MokaCustomersService } from './service/customers.service'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TopbarComponent,
    TicketsComponent,
    TicketItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    { provide: WorkersService, useClass: WorkersService },
    AuthService,
    { provide: TicketsService, useClass: TicketsService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
