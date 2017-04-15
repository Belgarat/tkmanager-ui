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

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customers = this.customersService.list();
  }

  sortNumber(a, b) {
    if(fOrder){
      fOrder = false;
      return a.id - b.id;
    }else{
      fOrder = true;
      return b.id - a.id;
    }
  }

  sortString(a, b) {
    if(fOrder){
      fOrder = false;
      return a.name.localeCompare(b.name);
    }else{
      fOrder = true;
      return b.name.localeCompare(a.name);
    }
  }

  sortColumn(tp){
    if(tp == "number"){
      this.customers.sort(this.sortNumber);
    }else{
      this.customers.sort(this.sortString);
    }
  }

}
