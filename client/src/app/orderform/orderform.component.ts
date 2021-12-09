import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
/** Generate  Order Form*/
export class OrderformComponent implements OnInit {

  act='';

  constructor(private apiService: ApiService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }
  placeOrder(){
    this.apiService.placeOrder().subscribe(
      (result: any) => {
        console.log('order',result);
        this.cookieService.set('saveorder-token', result.OrderId);
      },
      error => console.log(error)
    );
    this.router.navigate(['/orderconfirmation/']);
  }

}
