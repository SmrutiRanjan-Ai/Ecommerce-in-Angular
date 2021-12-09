import { Order } from './../core';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
/** generate All Orders Page */
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  editor=false;
  selectedOrder:any;

  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.getOrders();
  }
  editOrder(order: Order){
    this.editor=true;
    this.selectedOrder=order;
  }
  getOrders() {
    this.apiService.getOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
      },
      error => console.log(error)
    );
  }
}
