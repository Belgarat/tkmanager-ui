import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CapitalizePipe } from '../pipe/capitalize.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() rows: Array<any>;
  @Input() cols: any;
  @Input() actionbar: boolean = true;
  @Input() pagination: boolean = true;
  @Input() crud: boolean = true;
  @Input() itemPerPage: number = 10;
  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() onUpdating: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleting: EventEmitter<any> = new EventEmitter<any>();
  private items = [];
  private fOrder: boolean = true;
  private colName: string = "";
  private formSearch: boolean = false;
  private item: any;
  private active: number;

  constructor() { }

  ngOnInit() {
    if(!this.pagination){
      this.itemPerPage = this.rows.length;
    }
    this.rows.map(function(row){
      var ary = {};
      this.cols.map(function(col){
        ary[col] = row[col];
      },this)
      this.items.push(ary);
    }, this)
  }

  activate(i: number,item){
    //console.log(item);
    this.item = item;
    this.active = i;
    this.onSelected.emit(this.item);
  }

  sortData(a, b) {
    if(this.fOrder){
      this.fOrder = false;
      if(isNaN(a[this.colName])){
        return a[this.colName].localeCompare(b[this.colName]);
      }else{
        return a[this.colName] - b[this.colName];
      }
    }else{
      this.fOrder = true;
      if(isNaN(a[this.colName])){
        return b[this.colName].localeCompare(a[this.colName]);
      }else{
        return b[this.colName] - a[this.colName];
      }
    }
  }

  sortColumn(col){
    this.colName=col;
    this.items.sort(this.sortData.bind(this));
  }

  filter(rows){
    this.items = rows;
  }
  rowUpdate(item){
    console.log("Update item");
    this.onUpdating.emit(item);
  }
  rowDelete(item){
    console.log("Delete item");
    this.onDeleting.emit(item);
  }

}
