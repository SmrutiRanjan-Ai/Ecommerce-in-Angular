import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Order } from './../core';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
/** generate Order Modification Page */
export class OrderComponent implements OnInit {
  id : any;
  orderForm: any;

  @Input() set order(val: Order) {
    this.id=val.OrderId;
    this.orderForm = new FormGroup({
      OrderId: new FormControl(val.OrderId),
      OrderShippingRate: new FormControl(val.OrderShippingRate),
      OrderFlatShipping: new FormControl(val.OrderFlatShipping),
      OrderDateTime: new FormControl(val.OrderDateTime),
      OrderStatus: new FormControl(val.OrderStatus),
      OrderTotal: new FormControl(val.OrderTotal),
      OrderCustomerId: new FormControl(val.OrderCustomerId),
      OrderShippingAddress: new FormControl(val.OrderShippingAddress),
      OrderItemId: new FormControl(val.OrderItemId),
      OrderTrackingId: new FormControl(val.OrderTrackingId),
    })

  };


  constructor(private apiService: ApiService,private router: Router) {

   }
  ;



  ngOnInit(): void {

  }
  saveForm() {
    this.updateOrder();

  }
  updateOrder(){
    this.apiService.updateOrder(this.id,this.orderForm.value).subscribe(
      (data: any) => {
        this.order = data;
      },
      error => console.log(error)
    );
    this.router.navigate(['']);
  }
  getOrder() {
    this.apiService.getOrder(this.id).subscribe(
      (data: any) => {
        this.order = data;
      },
      error => console.log(error)
    );
  }
  returnOrders(){

    this.router.navigate(['']);

  }

}
