import { Product } from './../core';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-topproducts',
  templateUrl: './topproducts.component.html',
  styleUrls: ['./topproducts.component.css'],
  providers:  []
})
/** Generate Top Products Page  */
export class TopproductsComponent implements OnInit {

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
