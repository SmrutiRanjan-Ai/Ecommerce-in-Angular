import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderconfirmation',
  templateUrl: './orderconfirmation.component.html',
  styleUrls: ['./orderconfirmation.component.css']
})
/** Generate Order Confirmarion Page  */
export class OrderconfirmationComponent implements OnInit {

  orderStatus=false;
  orderId='';
  order:any=null;
  status="You haven't placed any order";

  constructor() { }

  ngOnInit(): void {
    const order= localStorage.getItem('order');
    if(order){
    this.orderStatus=true;
    this.order=JSON.parse(order);
     console.log('j',this.order)}
  }

}
