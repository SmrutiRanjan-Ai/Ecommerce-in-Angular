import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orderlogin',
  templateUrl: './orderlogin.component.html',
  styleUrls: ['./orderlogin.component.css']
})
/** Generate  Login Page after Cart COnfirmation*/
export class OrderloginComponent implements OnInit {
  login=false;
  success=false;
  status='';
  loginstatus=false;
  user:any =null;

  RegForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
  });
  LogForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  log='';

  constructor(private apiService: ApiService,private cookieService: CookieService) { }

  ngOnInit(): void {

    this.checkLogin();

    }
 checkLogin(){
  const authToken = this.cookieService.get('auth-token');
  if (authToken) {
    this.log='You are already logged in';
  }
  const u=localStorage.getItem('user');
  if(u){
  this.user = JSON.parse(u);
  this.loginstatus=true;
  }

 }

  saveFormLogin(){
    this.loginUser()
  }
  saveFormReg(){
  this.registerUser()

  }
  loginUser() {
    this.apiService.loginUser(this.LogForm.value).subscribe(
      (result: any) => {
        console.log(result)
        this.cookieService.set('auth-token', result.token);
        let usr={token: result.token, userid:result.id,username:result.username,firstname:result.first_name,lastname:result.last_name};
        console.log('login',JSON.stringify(usr))
        localStorage.setItem('user', JSON.stringify(usr));
        this.checkLogin();
      },
      error => console.log(error)
    );
  }
  registerUser(){
    this.apiService.registerUser(this.RegForm.value).subscribe(
      (result: any) => {
        console.log(result)
      },
      error => console.log(error)
    );
  }


}
