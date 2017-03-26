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

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TopbarComponent
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
