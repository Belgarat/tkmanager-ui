import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  @Input() user_id: number;

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
