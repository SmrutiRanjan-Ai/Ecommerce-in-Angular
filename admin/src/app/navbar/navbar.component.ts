import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
/** generate Top Navigation */
export class NavbarComponent implements OnInit {
  site={ "title" : "NG-KART - Admin"}
  loginStatus=false;
  loginStr='Login';

  constructor(private cookieService: CookieService,private router: Router) { }

  ngOnInit(): void {
    const authToken = this.cookieService.get('auth-token');
    if (authToken) {
      this.loginStatus=true;
      this.loginStr='Logout';
    }
    else{
      this.loginStr='Login';
      this.loginStatus=false;
    }


  }
  log() {
    const authToken = this.cookieService.get('auth-token');
    if (authToken) {
      this.cookieService.deleteAll();
      this.loginStr='Login';
      this.loginStatus=false;
    }
    else {

      this.loginStr='Logout';
      this.loginStatus=true;
    }

    this.router.navigate(['']);
}
}
