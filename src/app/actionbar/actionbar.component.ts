import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css']
})
export class ActionbarComponent implements OnInit {
  @Input() fOrder: boolean = true;
  @Input() colName: string = "";
  @Input() crud: boolean = true;
  private str: string ="";
  private list: Array<any> = [];
  @Input() formSearch: boolean = false;
  @Input() sourceList;
  @Output() onFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  filterItem(value){
    var regexp = new RegExp("(.*)?"+this.str+".*","i");
    var target = "";
    console.log(value);
    Object.keys(value).forEach(element => {
      target = target+" "+value[element];
    });
    return target.match(regexp);
  }

  filterData($event){
    this.onFilter.emit(this.sourceList.filter(this.filterItem.bind(this)));
  }

}
