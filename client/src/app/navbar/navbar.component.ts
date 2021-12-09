import { login, Category } from './../core';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

/** Generate Login Page */
export class NavbarComponent implements OnInit {

  term='';

  posts ={
      title: 'NG-KART',
      offer: 'Offers',
      category: 'Browse Categories'
    }

  categories:Category[]=[];
  log='Login';
  user:any;
  loginstatus=false;
  logoutstatus=true;

  constructor(private apiService: ApiService,private router: Router,private cookieService: CookieService) { }

  onSubmit(event: any) {
    event.preventDefault();
    console.log(this.term)
    this.router.navigate(['/search/'+this.term]);
  }

  ngOnInit(): void {
    this.getCategories();
    const authToken = this.cookieService.get('auth-token');
    const u=localStorage.getItem('user');
    if(u){
    this.user = JSON.parse(u);
    }
    else{
      this.loginstatus=false;
      this.logoutstatus=true;
    }



  }
  loginUserStatus(){



  }
  getCategories(){
    this.apiService.getCategories().subscribe((data: any) => {
     this.categories = data;
     console.log(data);
   },)
  }
  checkLogin()
  {const authToken = this.cookieService.get('auth-token');
    if (authToken) {
      this.loginstatus=true;
      this.log="Logout"
    }
    else{
      this.loginstatus=false;
      this.log="Login";
    }
  }
  logout(){
    this.cookieService.deleteAll();
    this.cookieService.delete('auth-token');
    localStorage.removeItem('user');
    localStorage.removeItem('ship');
    this.logoutstatus=true;
    this.user=null;

  }

}
