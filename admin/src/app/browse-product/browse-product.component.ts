import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../core';

@Component({
  selector: 'app-browse-product',
  templateUrl: './browse-product.component.html',
  styleUrls: ['./browse-product.component.css']
})
/** Browse Product Page */
export class BrowseProductComponent implements OnInit {
 products: Product[]=[];

 selectedProduct:any;
  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.getProducts();
  }
  editProduct(product: Product){
    this.selectedProduct=product;
  }
  getProducts() {
    this.apiService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log(this.products)
      },
      error => console.log(error)
    );
  }

}
