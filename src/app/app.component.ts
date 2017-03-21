import { Component, Input, Output } from '@angular/core';
import { WorkersService } from './service/workers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Ticket Manager';
  
  public prova(val){
    val = val || '';
    if(val==''){
      return '';
    }else{
      return val+"-";
    }
    
  }

}
