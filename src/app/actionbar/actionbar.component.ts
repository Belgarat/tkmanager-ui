import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css']
})
export class ActionbarComponent implements OnInit {
  @Input() fOrder: boolean = true;
  @Input() colName: string = "";
  private str: string ="";
  private list: Array<any> = [];
  @Input() formSearch: boolean = false;
  @Input() sourceList;
  @Output() onFilter: EventEmitter<any> = new EventEmitter<any>();
  @Output() onOrder: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
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
    this.onOrder.emit(this.list.sort(this.sortData.bind(this)));
  }

  filterItem(value){
    var regexp = new RegExp("(.*)?"+this.str+".*","i");
    let target = value.name+value.description+value.email+value.address+value.phone;
    return target.match(regexp);
  }

  filterData($event){
    this.onFilter.emit(this.sourceList.filter(this.filterItem.bind(this)));
  }

}
