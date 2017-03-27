import { Component, Injectable } from '@angular/core';
import { WorkersService } from '../service/workers.service'

@Injectable()
export class AuthService {

  constructor( private workersService: WorkersService){
  }

  login(username,password): any{
    let User = this.workersService.list().find(w => w.username == username);
    localStorage.setItem('currentUser', JSON.stringify(User));
    //location.reload();
  }

  logout(): any{
    localStorage.removeItem('currentUser');
    //location.reload();
  }

  isAuth(): boolean{
    if(localStorage.getItem('currentUser')){
      return true;
    }else{
      return false;
    }
  }

  get(): any{
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
