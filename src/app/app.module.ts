import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkersService } from './service/workers.service';
import { ApiService } from './service/api.service';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
