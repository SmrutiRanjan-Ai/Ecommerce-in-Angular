import { Category } from './../core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Tax } from '../core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
/** generate Add Product Page */
export class AddProductComponent implements OnInit {

  val=true;
  taxlist: Tax[]=[];
  categorylist: Category[]=[];
  productForm = new FormGroup({
    ProductName: new FormControl(''),
    ProductPrice: new FormControl(''),
    ProductFeaturedPrice: new FormControl(''),
    ProductSlug: new FormControl(''),
    ProductImageUrl: new FormControl(''),
    ProductInventory: new FormControl(''),
    ProductIsCustomizable: new FormControl(''),
    ProductTaxCode: new FormControl(''),
    ProductCategories: new FormControl(''),

  });

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTaxes();
    console.log(this.taxlist);
    this.getCategories();
    console.log(this.categorylist);
  }
  saveForm() {
    this.createProduct();


  }
  createProduct() {
    console.log(this.productForm.value)
    this.apiService.createProduct(this.productForm.value).subscribe(
      (result: any) => {
        console.log(result);
        this.router.navigate(['']);
      },
      error => console.log(error)
    );
  }
  getTaxes(){
    this.apiService.getTaxes().subscribe(
      (result: any) => {
        this.taxlist=result;
        console.log(result)
      },
      error => console.log(error)
    );
  }
  getCategories(){

    this.apiService.getCategories().subscribe(
      (result: any) => {
        this.categorylist=result;
        console.log(result)
      },
      error => console.log(error)
    );

  }

}
