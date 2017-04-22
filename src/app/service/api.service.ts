import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Workers} from '../model/workers.model';
import { Tickets } from '../model/tickets.model';

@Injectable()
export class ApiService {
    workers: Workers;
    private serviceUrl:string = "http://localhost:8080/api/v1"
    private workers_list: Array<Workers>;
    private tickets_list: Array<Tickets>;

    constructor(private http: Http){
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
            response = this.http.get(this.serviceUrl, {headers: this.getHeaders()})
                            .map(res => JSON.stringify(res))
                            .catch(this.handleError);
        }
        if(path=="tickets"){
            //console.log(this.serviceUrl+"/tickets");
            this.http.get(this.serviceUrl+"/tickets", {headers: this.getHeaders()})
                            .map(res => res.json())
                            .catch(this.handleError);
        }
        return response;
    }

    list1(path: string){
            this.http.get(this.serviceUrl+"/tickets", {headers: this.getHeaders()})
                            .map(res => res.json())
                            .subscribe(result => this.tickets_list = result);
            return this.tickets_list;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}