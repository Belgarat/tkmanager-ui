import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Input() title: string;
  username: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    let User = JSON.parse(localStorage.getItem('currentUser'));
    if(User) this.username = User.username;
  }

  logout(){
    this.authService.lblogout();
    //location.reload();
  }

}
