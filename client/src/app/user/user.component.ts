import { ApiService } from './../api.service';
import { Order } from './../core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
/** Generate User Component */
export class UserComponent implements OnInit {
  orders:Order[]=[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getOrdersByUser().subscribe(
      (result: any) => {
        console.log('order',result);
        this.orders=result;


      },
      error => console.log(error)
    );
  }

}
