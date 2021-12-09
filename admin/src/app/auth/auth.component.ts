import { Component, OnInit } from '@angular/core';
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
/** Authorizatio and login */
export class AuthComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    const authToken = this.cookieService.get('auth-token');
    if (authToken) {
      this.router.navigate(['/portal']);
    }
  }
  saveForm() {
      this.loginUser();
  }
  loginUser() {
    this.apiService.loginUser(this.authForm.value).subscribe(
      (result: any) => {
        this.cookieService.set('auth-token', result.token);
        this.router.navigate(['/portal']);
      },
      error => console.log(error)
    );
  }
}
