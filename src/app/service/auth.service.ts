import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { WorkersService } from '../service/workers.service'

@Injectable()
export class AuthService {
  private serviceUrl:string = "http://10.121.1.37:3000/api";

  constructor( private workersService: WorkersService, private http:Http){
  }

  login(username,password): any{
    let User = this.workersService.list().find(w => w.username == username);
    localStorage.setItem('currentUser', JSON.stringify(User));
    //location.reload();
  }

  lblogin(username,pwd): any{
    let data = {
      email: username,
      password: pwd
    }
    this.http.post(this.serviceUrl+"/Users/login", JSON.stringify(data), {headers: this.getHeaders()})
                    .map(res => res.json())
                    .subscribe(result => {
                      console.log(result);
                      localStorage.setItem('currentUser', JSON.stringify(result));
                    },result => {
                      console.log(result.json().error.message);
                    });
   
    //localStorage.setItem('currentUser', JSON.stringify(User));
    //location.reload();
  }


  private getHeaders(){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Authorization',this.get().id);
      //let options = new RequestOptions({headers: headers})
      //console.log(headers);
      return headers;
  }

  logout(): any{
    localStorage.removeItem('currentUser');
    //location.reload();
  }

  lblogout(): any{
    console.log("Logout process...");
    this.http.post(this.serviceUrl+"/Users/logout",{ withCredentials: true }, {headers: this.getHeaders()})
                    .map(res => res.json())
                    .subscribe(result => {
                      console.log(result);
                      localStorage.removeItem('currentUser');
                    },result => {
                      console.log(result.json().error.message);
                    });

    //localStorage.removeItem('currentUser');
  }

  isAuth(): boolean{
    if(localStorage.getItem('currentUser')){
      return true;
    }else{
      return false;
    }
  }

  get(): any{
    let User: any;
    if(localStorage.getItem('currentUser')){
      User = JSON.parse(localStorage.getItem('currentUser'));
    }else{
      User = {};
    }
    return User;
  }

}
