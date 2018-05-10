import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  	host = "5.2.86.82";
	port = "8080";
	headers = new Headers({ 'Content-Type': 'application/json' });
	options = new RequestOptions({ headers: this.headers });


  constructor(private http: Http) { }




  addUser(user): Observable<any>{
  	return this.http.post( 'http://' + this.host + ':' + this.port + '/adduser',user, this.options).map((res) => res)
  	/*.subscribe(
  		res => { console.log(res); },
  		err => { console.log("Error occured"); }
  		);*/
  }

/*  checkUsername(username){
  	 this.http.get('http://' + this.host + ':' + this.port + '/checkusername',username).subscribe(
  		res => { console.log(res); },
  		err => { console.log("Error occured"); }
  		);
  }
*/

  
}
