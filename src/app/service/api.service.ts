import { Injectable, Inject } from '@angular/core';
import {Workers} from '../model/workers.model';

@Injectable()
export class ApiService {
    workers: Workers;
    private workers_list: Array<Workers>;

    constructor(){
        this.workers_list = [
            {id: 1, username: "admin", name: "Admin", surname: "Amministratore", password: "admin", email: "mbrunet@sitbelluno.it", created_at: ""},
            {id: 2, username: "mbrunet", name: "Marco", surname: "Brunet", password: "mbrunet", email: "mbrunet@sitbelluno.it", created_at: ""}
        ]
    }

    get(path: string, id: number){
        return this.workers_list[0];
    }

    list(path: string){
        return this.workers_list;
    }

}