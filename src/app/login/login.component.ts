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

  login(): any{
    console.log("Utente:"+this.username);
    console.log("Password:"+this.password);
    let User = this.workersService.list().find(w => w.username == this.username);
    localStorage.setItem('currentUser', JSON.stringify(User));
    location.reload();
  }

  logout(): any{
    localStorage.removeItem('currentUser');
    location.reload();
  }


}
