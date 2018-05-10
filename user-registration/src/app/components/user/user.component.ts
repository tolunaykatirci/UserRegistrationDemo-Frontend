import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
})
export class UserComponent implements OnInit {

	userForm: FormGroup;
	user: {
		name: string,
		password: string,
		username: string,
		mail: string,
		phonenumber: number,
		address: string
	};

    userInfoLabel =  [false,""];
    private timer: Observable<any>;

  constructor(private fb: FormBuilder, private userService: UserService) {

  	this.userForm = fb.group({
  		'name' : [null,Validators.compose([Validators.required, Validators.minLength(3)])],
  		'password' : [null, Validators.compose([Validators.required, Validators.minLength(3)])],
  		'username' : [null, Validators.compose([Validators.required, Validators.minLength(3)])],
  		'mail' : [null, Validators.compose([Validators.required, Validators.email])],
  		'phonenumber' : [null,Validators.required],
  		'address' : [null, Validators.required]
  	}) 

  }
 
  ngOnInit() {
    this.userInfoLabel[0] = false;
  }


  submit(value){
  	console.log(JSON.stringify(value));
    this.userService.addUser(JSON.stringify(value)).subscribe(res => {this.userInfo(res)});
  }



  userInfo(res){
     if(res.status === 200){
       console.log('user Added');
       this.userInfoLabel[0] = true;
       this.userInfoLabel[1] = 'Kullanici basariyla eklendi';
       this.timer        = Observable.timer(5000); // 5000 millisecond means 5 seconds
       this.timer.subscribe(() => {
            // set showloader to false to hide loading div from view after 5 seconds
            this.userInfoLabel[0] = false;
        });
       //setTimeout( this.userInfoLabel[0] = false, 5000);
     }
     else{
       console.log('user cannot added');
       this.userInfoLabel[0] = true;
       this.userInfoLabel[1] = 'Kullanici eklenemedi';
       //setTimeout( this.userInfoLabel[0] = false, 5000);
     }
   }



}
