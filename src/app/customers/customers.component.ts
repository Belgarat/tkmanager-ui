import { Component, OnInit } from '@angular/core';
import { CustomersService, MokaCustomersService } from '../service/customers.service';
import { Customers } from '../model/customers.model';

var fOrder: boolean = true;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  private customers: Array<Customers>;
  private sourceCustomers: Array<Customers>;
  private fOrder: boolean = true;
  private colName: string = "";
  private str: string ="";
  private formSearch: boolean = false;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customers = this.customersService.list();
    this.sourceCustomers = this.customers;
  }

  sortData(a, b) {
    if(this.fOrder){
      this.fOrder = false;
      return a.name.localeCompare(b[this.colName]);
    }else{
      this.fOrder = true;
      return b.name.localeCompare(a[this.colName]);
    }
  }

  sortColumn(col){
    this.colName=col;
    //this.customers.sort(this.sortData.bind(this));
  }

  update(customers){
    this.customers = customers;
  }

}
