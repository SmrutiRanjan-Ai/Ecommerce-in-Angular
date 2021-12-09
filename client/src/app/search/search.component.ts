import { Product } from './../core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
/** Generate  Search Page*/
export class SearchComponent implements OnInit {
  productlist:any;
  products:any[]=[];
  finalproducts:any[]=[];
  term='';

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.term=this.route.snapshot.params['term'];
    this.getSearch(this.term);
  }

  getSearch(term:string){
    this.apiService.getRecommendedProducts(term).subscribe(
      (result: any) => {

        this.productlist=result;
        this.prod();
      }
    );
  }
  prod(){
    for (var i in this.productlist.products){
      this.apiService.getProduct(i).subscribe((data: any) => {
        this.products.push(data);
      },);
  }
}

}
