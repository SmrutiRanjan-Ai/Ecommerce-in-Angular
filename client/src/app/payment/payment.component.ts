import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
/** Generate Payment Page */
export class PaymentComponent implements OnInit {
  user:any=null
  orderstatus=false;
  order:any=null;
  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit(): void {
  }
  pay(){

    localStorage.setItem('pay',JSON.stringify(true));
    this.placeOrder();

  }
  checkLogin(){

    const u=localStorage.getItem('user');
    if(u){
    this.user = JSON.parse(u);
    }

   }
  placeOrder(){
    this.apiService.placeOrder().subscribe(
      (result: any) => {
        console.log('order',result);

        localStorage.setItem('order',JSON.stringify(result));
        this.apiService.deleteCart();
        this.orderstatus=true;
        const order= localStorage.getItem('order');
        this.order=order;
        console.log(order)


      },
      error => console.log(error)
    );
  }
}
