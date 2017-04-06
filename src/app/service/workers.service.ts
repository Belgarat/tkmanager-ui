import { Injectable, Inject } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class WorkersService {
    private id: number;

    constructor(
        private apiService: ApiService,
    ) {}

    get() {
        return this.apiService.get('workers', this.id);
    }

    list(){
        return this.apiService.list('workers');
    }
}

@Injectable()
export class MokaWorkersService {
    private id: number;

    constructor(
        
    ) {}

    get(id) {
        let workers_list;
        workers_list = [
            {id: 1, username: "admin", name: "Admin", surname: "Amministratore", password: "admin", email: "mbrunet@sitbelluno.it", created_at: ""},
            {id: 2, username: "mbrunet", name: "Marco", surname: "Brunet", password: "mbrunet", email: "mbrunet@sitbelluno.it", created_at: ""}
        ];
        return workers_list[id];
    }

    list(){
        let workers_list;
        workers_list = [
            {id: 1, username: "admin", name: "Admin", surname: "Amministratore", password: "admin", email: "mbrunet@sitbelluno.it", created_at: ""},
            {id: 2, username: "mbrunet", name: "Marco", surname: "Brunet", password: "mbrunet", email: "mbrunet@sitbelluno.it", created_at: ""}
        ];
        return workers_list;
    }
}