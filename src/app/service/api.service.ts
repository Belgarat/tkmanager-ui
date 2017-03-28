import { Injectable, Inject } from '@angular/core';
import {Workers} from '../model/workers.model';
import { Tickets } from '../model/tickets.model';

@Injectable()
export class ApiService {
    workers: Workers;
    private workers_list: Array<Workers>;
    private tickets_list: Array<Tickets>;

    constructor(){
        this.workers_list = [
            {id: 1, username: "admin", name: "Admin", surname: "Amministratore", password: "admin", email: "mbrunet@sitbelluno.it", created_at: ""},
            {id: 2, username: "mbrunet", name: "Marco", surname: "Brunet", password: "mbrunet", email: "mbrunet@sitbelluno.it", created_at: ""}
        ];
        this.tickets_list = [
            {
            id: 1,
            created_at: "11/03/2017 16:15",
            updated_at: "",
            deleted_at: "",
            customer_id: 1,
            customer_name: "Telecom s.p.a.",
            creator_id: 1,
            creator_usernsme: "admin",
            status_id: 1,
            status_status: "opened",
            priority_id: 2,
            priority_priority: "medium",
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
            creator_usernsme: "mbrunet",
            status_id: 1,
            status_status: "opened",
            priority_id: 1,
            priority_priority: "hight",
            description: "This is our second helpdesk request! Take care of customers! \r\nSee ya!"
            }
        ];

    }

    get(path: string, id: number){
        let response;
        if(path=="workers"){
            response = this.workers_list[0];
        }
        if(path=="tickets"){
            response = this.tickets_list[0];
        }
        return response;
    }

    list(path: string){
        let response;
        if(path=="workers"){
            response = this.workers_list;
        }
        if(path=="tickets"){
            response = this.tickets_list;
        }
        return response;
    }

}