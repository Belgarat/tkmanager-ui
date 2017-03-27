import { Injectable, Inject } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class TicketsService {
    private id: number;

    constructor(
        private apiService: ApiService,
    ) {}

    get(id) {
        return this.apiService.get('tickets', id);
    }

    list(){
        return this.apiService.list('tickets');
    }
}