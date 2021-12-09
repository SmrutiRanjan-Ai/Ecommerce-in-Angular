import { CookieService } from 'ngx-cookie-service';
import { state } from './../core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
/** Generate  Shipping address page*/
export class ShippingComponent implements OnInit {
  login=false;
  success=false;
  status='';
  statelist= new state();
  id='';
  ship: any=null;
  user:any=null;
  alert='';
  shipstatus=false;
  loginstatus=false;
  shippingForm = new FormGroup({
    ShippingName: new FormControl(''),
    ShippingAddressLine1: new FormControl(''),
    ShippingAddressLine2: new FormControl(''),
    ShippingAddressState: new FormControl(''),
    ShippingAddressCity: new FormControl(''),
    ShippingAddressPinCode: new FormControl(''),
    ShippingAddressPhone: new FormControl(''),
    ShippingAddressCustomerId: new FormControl(''),

  });
  constructor(private apiService: ApiService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.checkLogin();
    this.checkship();
  }
  checkLogin(){

    const u=localStorage.getItem('user');
    if(u){
    this.user = JSON.parse(u);
    this.loginstatus=true;
    }

   }
  checkship(){
    const u=localStorage.getItem('ship');
    if(u){
    this.ship = JSON.parse(u);
    this.shipstatus=true;
    }

   }
  saveForm(){
    if (this.loginstatus){
    this.shippingForm.patchValue({
      ShippingAddressCustomerId: this.user.userid,
   });
    const a = this.cookieService.get('auth-token');
    this.apiService.createShippingAddress(this.shippingForm.value).subscribe(
      (result: any) => {
        this.cookieService.set('shipping-token', result.ShippingAddressId);
        localStorage.removeItem('ship');

        localStorage.setItem('ship', JSON.stringify(result));
        this.checkship();
      },
      error => {console.log(error); this.status="You're not loggedin"}
    );
    }
    else{
      this.alert="You're not Logged In";

    }


  }

}
