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

  constructor() { }

  ngOnInit() {
    //console.log(this.cols);
    //console.log(this.rows);
    this.rows.map(function(row){
      var ary = {};
      this.cols.map(function(col){
        ary[col] = row[col];
      },this)
      this.items.push(ary);
    }, this)
    console.log(this.items);
  }
  

}
