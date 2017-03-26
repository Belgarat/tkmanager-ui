import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Input() title: string;
  username: string;

  constructor() { }

  ngOnInit() {
    let User = JSON.parse(localStorage.getItem('currentUser'));
    if(User) this.username = User.username;
  }

}
