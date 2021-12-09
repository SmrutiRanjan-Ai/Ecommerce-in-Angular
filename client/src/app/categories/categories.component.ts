import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
/** Generate  All Categories*/
export class CategoriesComponent implements OnInit {
  categories: Category[]=[];
  products: any[]=[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }
 getCategories(){
   this.apiService.getCategories().subscribe((data: any) => {
    this.categories = data;
    console.log(data);
  },)
 }
  getProducts(){
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log('product',data);
    },
  );
}

}
