import { Component, OnInit } from '@angular/core';
import { CustomersService, MokaCustomersService } from '../service/customers.service';
import { Customers } from '../model/customers.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  private customers: Array<Customers>;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customers = this.customersService.list();
  }

  itemUpdate(item){
    console.log(item);
  }

  itemDelete(item){
    console.log(item);
  }

}
