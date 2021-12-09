import { Product } from './../core';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

/** Generate Cart Page */
export class CartComponent implements OnInit {
 products: any[] =[];
 ordertotal=0;
  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.getCartProducts();
    this.getOrderTotal();
  }
  getOrderTotal(){
    this.getCartProducts();
    let sum:number=0;
    for(var i of this.products){
      sum=sum + i.productlist.ProductPrice * i.num;

    }
    this.ordertotal=sum;
    console.log(this.ordertotal)

  }
  getCartProducts(){

    this.products=this.apiService.getCart();

  }
  addQty(id:any){
    this.apiService.addNum(id);
    this.getOrderTotal();
  }
  minusQty(id:any){
    this.apiService.minusNum(id);
    this.getOrderTotal();

  }
  placeOrder(){
    this.apiService.placeOrder().subscribe((data: any) => {
      console.log(data);
    },);
  }


}
