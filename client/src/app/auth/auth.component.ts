import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
/** Generate  Authentication Page */
export class AuthComponent implements OnInit {

  @Input() auth = '';

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    const authToken = this.cookieService.get('auth-token');
    /*if (authToken) {
      this.router.navigate(['']);
    }*/
  }
  saveForm() {
    if (this.auth == 'register'){
      this.registerUser();
    }
    else{
      this.loginUser();
    }
  }
  registerUser(){
    this.apiService.registerUser(this.authForm.value).subscribe(
      (result: any) => {
        console.log(result)
      },
      error => console.log(error)
    );
  }
  loginUser() {
    this.apiService.loginUser(this.authForm.value).subscribe(
      (result: any) => {
        console.log(result)
        this.cookieService.set('auth-token', result.token);
        this.cookieService.set('userid-token', result.id);
        this.cookieService.set('username-token', result.username);
        this.cookieService.set('firstname-token', result.firt_name);
        this.cookieService.set('lastname-token', result.ilast_name);
      },
      error => console.log(error)
    );
  }
}
