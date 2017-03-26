import { Component, Input, Output } from '@angular/core';
import { WorkersService } from './service/workers.service';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Ticket Manager'; 
  //private isAuth: boolean = false;

  constructor( private auth: AuthService){}

}
