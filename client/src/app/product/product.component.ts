import { Product, base } from './../core';
 import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
/** Generate Product Page */
export class ProductComponent {
  id:any;
  product: any;
  num:any;
  showalert=false;
  booleanVariable: boolean = false;

  constructor(private route: ActivatedRoute,private apiService: ApiService,) { }
 baseurl=base;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.apiService.getProduct(this.id).subscribe((data: any) => {
      this.product = data;
      console.log(data);
    },

  );
}

  dataChanged(event: any){
  }

  addToCart() {
    this.apiService.addToCartSingle(this.product);
    this.addToCartAlert();
    this.booleanVariable = true;
  }
  deleteCart() {
    this.apiService.deleteCart();
    console.log('del');
  }
  addToCartAlert(){
    this.showalert=true;

  };
}
