
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:  []
})
/** Generate  Products Page*/
export class ProductsComponent implements OnInit{

  products: Product[]=[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProducts();

  }
  getProducts(){
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    },

  );

  }
}



