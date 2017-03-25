import { Component, OnInit, Input } from '@angular/core';
import { WorkersService } from '../service/workers.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;

  ngOnInit() {
  }

  constructor( private workersService: WorkersService){
  }

  login(): void{
    console.log("Utente:"+this.username);
    console.log("Password:"+this.password);
    console.log(this.workersService.list());
    console.log(this.workersService.get());
  }


}
