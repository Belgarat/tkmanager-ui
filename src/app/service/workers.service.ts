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