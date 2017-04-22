import { Injectable, Inject } from '@angular/core';
import { ApiService } from './api.service';

 
var tickets_list = [
        {
        id: 1,
        created_at: "11/03/2017 16:15",
        updated_at: "",
        deleted_at: "",
        customer_id: 1,
        customer_name: "Telecom s.p.a.",
        creator_id: 1,
        creator_username: "admin",
        status_id: 1,
        status: "opened",
        priority_id: 2,
        priority: "medium",
        description: "This is or first helpdesk request! Take care of our customer, please!"
        },
        {
        id: 2,
        created_at: "25/03/2017 14:10",
        updated_at: "",
        deleted_at: "",
        customer_id: 2,
        customer_name: "Google it s.p.a",
        creator_id: 2,
        creator_username: "mbrunet",
        status_id: 1,
        status: "opened",
        priority_id: 1,
        priority: "hight",
        description: "This is our second helpdesk request! Take care of customers! \r\nSee ya!"
        }
    ];

@Injectable()
export class TicketsService {
    private id: number;
    private tickets: any;

    constructor(
        private apiService: ApiService,
    ) {}

    get(id) {
        return this.apiService.get('tickets', id);
    }

    list(){
        //this.apiService.list('tickets').subscribe(data => data.map((index,value) => this.tickets.push(index)));
        return this.apiService.list1('tickets');
    }
}

@Injectable()
export class MokaTicketsService {
    private id: number;

    constructor(
        
    ) {}

    get(id) {
        return tickets_list[id];
    }

    list(){
        return tickets_list;
    }
}