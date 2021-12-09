import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/** Generate  Login Page*/
export class LoginComponent implements OnInit {
  login=false;
  success=false;
  status='';
  loginstatus=false;
  user:any;

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


  constructor(private apiService: ApiService,private cookieService: CookieService,private router: Router) { }

  ngOnInit(): void {
    const authToken = this.cookieService.get('auth-token');
    if (authToken) {
      this.log='You are already logged in';
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
        console.log('token',result.token);
        let user={token:result.token, userid:result.id,username:result.username,firstname:result.first_name,lastname:result.last_name};
        console.log('login',JSON.stringify(user))
        localStorage.setItem('user', JSON.stringify(user));
        this.loginstatus=true;
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
