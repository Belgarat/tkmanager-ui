import { Injectable, Inject } from '@angular/core';
import { Customers } from '../model/customers.model'
import { ApiService } from './api.service';

@Injectable()
export class CustomersService {
    private serviceName: string = "customers";
    private id: number;

    constructor(
        private apiService: ApiService,
    ) {}

    get() {
        return this.apiService.get(this.serviceName, this.id);
    }

    list(){
        return this.apiService.list(this.serviceName);
    }
}

@Injectable()
export class MokaCustomersService {
    private customer: Customers;
    private serviceName: string = "customers";
    private id: number;
    private customers_list: Array<Customers>;

    constructor() {

        this.customers_list = [
            {
                id: 1,
                name: 'Telecom',
                description: 'Telecom Italia',
                email: 'customers@telecomitalia.it',
                address: 'via ciao, 12',
                phone: '0437555555',
                vatFiscalCode: '125481669',
                notes: 'annotazione',
                createdAt: '',
                updatedAt: '',
                deletedAt: ''
            },
            {
                id: 2,
                name: 'Infostrada',
                description: 'Infostrada enterprise',
                email: 'customers@infostrada.it',
                address: 'via ciao, 12',
                phone: '0437555333',
                vatFiscalCode: '1254814444',
                notes: 'annotazione 2',
                createdAt: '',
                updatedAt: '',
                deletedAt: ''
            },
        ];
        
    }

    get(id) {
        return this.customers_list[id];
    }

    list(){
        return this.customers_list;
    }
}