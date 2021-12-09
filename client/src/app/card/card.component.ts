import { base } from './../core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

/** Generate  Card for Product Info*/
export class CardComponent implements OnInit {
  @Input() title ='';
  @Input() imageUrl ='';
  @Input() price = 0;
  @Input() description ='';
  @Input() id =0;
  @Input() featuredPrice=0;
  @Input() ProductImageUrl='';
  baseurl=base;

  constructor() { }

  ngOnInit(): void {
  }

}
