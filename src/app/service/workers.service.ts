import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class WorkersService {
    constructor(private apiService: ApiService) {
    }

    list() {
        return this.apiService.get('/workers');
    }
}