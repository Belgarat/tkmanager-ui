import { Component, OnInit, Input } from '@angular/core';
import { TicketItemComponent } from '../ticket-item/ticket-item.component'
import { TicketsService } from '../service/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  @Input() user_id: number;
  private tickets;
  private active: number;

  constructor(private ticketsService: TicketsService,) { 
    
  }

  ngOnInit() {
    this.tickets=this.ticketsService.list();
  }

  activate(i: number){
    console.log(i);
    this.active = i;
  }

  log(item){
    console.log(item.id);
  }

}
