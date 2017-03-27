import { Injectable, Inject } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class TicketsService {
    private id: number;

    constructor(
        private apiService: ApiService,
    ) {}

    get() {
        return this.apiService.get('tickets', this.id);
    }

    list(){
        return this.apiService.list('tickets');
    }
}