import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkersService } from './service/workers.service';
import { ApiService } from './service/api.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './service/auth.service';
import { TopbarComponent } from './topbar/topbar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketItemComponent } from './ticket-item/ticket-item.component';

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
    NgbModule
  ],
  providers: [
    ApiService,
    { provide: WorkersService, useClass: WorkersService },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
