import { Product } from './../core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

/** Generate  Each Category Page*/
export class CategoryComponent implements OnInit {
  slug='';
  products: Product[]=[];

  constructor(private route: ActivatedRoute,private apiService: ApiService,) { }

  ngOnInit(): void {
    this.slug=this.route.snapshot.params['slug'];
    this.getProducts();
    console.log('slug',this.slug)

  }
  getProducts(){
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    },

  );

}
}
