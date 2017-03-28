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
  private item;

  constructor(private ticketsService: TicketsService,) { 
    console.log(this.item);
  }

  ngOnInit() {
    this.tickets=this.ticketsService.list();
  }

  activate(i: number,item){
    console.log(i);
    this.item = item;
    this.active = i;
  }

  log(item){
    console.log(item.id);
  }

}
