import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { WorkersService, MokaWorkersService } from './service/workers.service';
import { ApiService } from './service/api.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { TopbarComponent } from './topbar/topbar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsService, MokaTicketsService } from './service/tickets.service';
import { TicketItemComponent } from './ticket-item/ticket-item.component';
import { CustomersService, MokaCustomersService } from './service/customers.service';
import { CustomersComponent } from './customers/customers.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { TableComponent } from './table/table.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';

const routes: Routes = [
  {path: '', component: TicketsComponent, canActivate: [AuthGuard]},
  {path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]}
];
//enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TopbarComponent,
    TicketsComponent,
    TicketItemComponent,
    CustomersComponent,
    ActionbarComponent,
    TableComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ApiService,
    { provide: WorkersService, useClass: MokaWorkersService },
    AuthService,
    { provide: TicketsService, useClass: TicketsService },
    { provide: CustomersService, useClass: MokaCustomersService },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
