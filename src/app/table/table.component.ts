import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() rows: Array<any>;
  @Input() cols: any;
  private items: Array<any>;

  constructor() { }

  ngOnInit() {
    //console.log(this.cols);
    //console.log(this.rows);
    var ary: any = [];
    var i =0;
    this.rows.map((row) => this.cols.map(function(col){
      ary[i] = new Object();
      ary[i][col] = row[col];
      console.log(ary);
      //this.items.push({col: row[col]});
    }));
    //console.log(this.items);
  }
  

}
