import { Product } from './../core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
/** Edit Product Page */
export class EditProductComponent implements OnInit {
  id : any;
  productForm: any;

  constructor(private apiService: ApiService,private router: Router) { }

  @Input() set order(val: Product) {
    this.id=val.ProductId;
    this.productForm = new FormGroup({
      ProductId: new FormControl(val.ProductId),
      ProductName: new FormControl(val.ProductName),
      ProductSlug: new FormControl(val.ProductSlug),
      ProductDescription: new FormControl(val.ProductDescription),
      ProductImageUrl: new FormControl(val.ProductImageUrl),
      ProductIsCustomizable: new FormControl(val.ProductIsCustomizable),
      ProductPrice: new FormControl(val.ProductPrice),
      ProductLaunchDate: new FormControl(val.ProductLaunchDate),
      ProductInventory: new FormControl(val.ProductInventory),
      ProductInventoryUnit: new FormControl(val.ProductInventoryUnit),
      ProductFeaturedPrice: new FormControl(val.ProductFeaturedPrice),
      ProductDiscountpercentage: new FormControl(val.ProductDiscountpercentage),
      ProductShippingRate: new FormControl(val.ProductShippingRate),
      ProductFlatShipping: new FormControl(val.ProductFlatShipping),
      ProductTaxCode: new FormControl(val.ProductCreater),
      ProductCategories: new FormControl(val.ProductCategories),
      ProductTags: new FormControl(val.ProductTags),
    })

  };

  ngOnInit(): void {
  }
  saveForm() {
    this.updateProduct();}

    updateProduct(){
      this.apiService.updateProduct(this.id,this.productForm.value).subscribe(
        (data: any) => {
          this.order = data;
        },
        error => console.log(error)
      );
      this.router.navigate(['']);
    }
    returnProducts(){
      this.router.navigate(['']);
    }
}
