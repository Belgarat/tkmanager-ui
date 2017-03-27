import { Component, OnInit, Input, Output } from '@angular/core';
import { WorkersService } from './service/workers.service';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'Ticket Manager'; 
  user_id: number = 0;
  //private isAuth: boolean = false;

  constructor( private auth: AuthService){
    
  }

  ngOnInit() {
    this.user_id = this.auth.get().id;
  }


}
