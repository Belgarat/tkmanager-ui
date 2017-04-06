import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TicketItemComponent } from '../ticket-item/ticket-item.component'
import { TicketsService } from '../service/tickets.service';
import { Tickets } from '../model/tickets.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  form: FormGroup;
  @Input() user_id: number;
  private tickets;
  private active: number;
  private item: Tickets;
  private item_id;

  description = new FormControl("", Validators.required);

  constructor(private ticketsService: TicketsService,fb:FormBuilder) { 
    this.form = fb.group({
                "description": this.description,
    });
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

  addNew(){
    this.item_id=0;
  }

  log(item){
    console.log(item.id);
  }

  onSubmit(form: any, e: Event){
    //e.preventDefault();
    this.tickets.push({
      id: 0,
      created_at: new Date().toLocaleDateString(),
      updated_at: new Date().toLocaleDateString(),
      deleted_at: new Date().toLocaleDateString(),
      customer_id: 3,
      customer_name: "UMF",
      creator_id: 3,
      creator_username: "mbrunet",
      status_id: 1,
      status_status: "Open",
      priority_id: 1,
      priority_priority: 'Hight',
      description: this.description.value
    });

    console.log(this.tickets);
  }

}
