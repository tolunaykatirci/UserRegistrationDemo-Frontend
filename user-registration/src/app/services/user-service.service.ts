import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserServiceService {

	host = "localhost";
	port = "8080";

  constructor(private http: HttpClient) { }




  addUser(user){
  	this.http.post( 'http://' + this.host + ':' + this.port + '/adduser',user).subscribe(
  		res => { console.log(res); },
  		err => { console.log("Error occured"); }
  		);
  }


  checkUsername(username){
  	this.http.get('http://' + this.host + ':' + this.port + '/checkusername',username).subscribe(
  		res => { console.log(res); },
  		err => { console.log("Error occured"); }
  		);
  }

}
