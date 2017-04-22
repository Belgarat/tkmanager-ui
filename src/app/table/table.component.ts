import { Component, OnInit, Input, Output } from '@angular/core';
import { CapitalizePipe } from '../pipe/capitalize.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() rows: Array<any>;
  @Input() cols: any;
  private items = [];
  private fOrder: boolean = true;
  private colName: string = "";
  private formSearch: boolean = false;

  constructor() { }

  ngOnInit() {
    this.rows.map(function(row){
      var ary = {};
      this.cols.map(function(col){
        ary[col] = row[col];
      },this)
      this.items.push(ary);
    }, this)
  }


  sortData(a, b) {
    if(this.fOrder){
      this.fOrder = false;
      return a[this.colName].localeCompare(b[this.colName]);
    }else{
      this.fOrder = true;
      return b[this.colName].localeCompare(a[this.colName]);
    }
  }

  sortColumn(col){
    this.colName=col;
    this.items.sort(this.sortData.bind(this));
  }

  update(rows){
    this.items = rows;
  }
  

}
