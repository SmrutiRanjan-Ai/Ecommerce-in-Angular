import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Category, Order, Product,OrderItem, OrderUpload} from './core'

@Injectable({
  providedIn: 'root'
})
/** Communicates with Backend Server  */
export class ApiService {
 /** BACKEND URL */
  baseUrl = 'https://smrutiranjan89.pythonanywhere.com/';
  baseProductsUrl = `${this.baseUrl}api/product/`;
  baseProductsonUrl = 'https://my-json-server.typicode.com/SmrutiRanjan-Ai/demo/products/';
  baseOrdersUrl = `${this.baseUrl}api/order/`;
  baseOrdersUserUrl = `${this.baseUrl}api/orders_user/`;
  baseCategorysUrl = `${this.baseUrl}api/category/`;
  baseShippingUrl = `${this.baseUrl}api/shipaddr/`;
  baseRecomUrl = `${this.baseUrl}api/recommend_products/`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }
/** Get Orders */
  getOrders() {
    return this.httpClient.get<Order[]>(this.baseOrdersUrl, {headers: this.getAuthHeaders()});
  }

/** Get Products List */
  getProducts() {
    return this.httpClient.get<Product[]>(this.baseProductsUrl, {headers: this.headers});
  }
/** Get Individual Order */
  getOrder(id:string) {
    return this.httpClient.get<Product[]>(`${this.baseOrdersUrl}${id}/`, {headers: this.headers});
  }
/** Get Categories */
  getCategories() {
    return this.httpClient.get<Category[]>(`${this.baseCategorysUrl}`, {headers: this.headers});
  }
/** Update Order */
  /**
   * @param  {string} id
   * @param  {any} order
   */
  updateOrder(id: string, order:any){
    const body = JSON.stringify(order);
    return this.httpClient.put(`${this.baseOrdersUrl}${id}/`, body, {headers: this.getAuthHeaders()});
  }
/** Update Product */
  /**
   * @param  {string} id
   * @param  {any} product
   */
  updateProduct(id: string, product:any){
    const body = JSON.stringify(product);
    return this.httpClient.put(`${this.baseProductsUrl}${id}/`, body, {headers: this.getAuthHeaders()});
  }
  /** Create Product */
  /**
   * @param  {any} product
   */
  createProduct(product: any) {
    const body = JSON.stringify(product);
    return this.httpClient.post(`${this.baseProductsUrl}`, body, {headers: this.getAuthHeaders()});
  }
  /** Get Product */
  /**
   * @param  {string} id
   */
  getProduct(id: string) {
    return this.httpClient.get(`${this.baseProductsUrl}${id}/`, {headers: this.headers});
  }
  /** Register User */
  /**
   * @param  {any} authData
   */
  registerUser(authData:any) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}api/account/register/`, body, {headers: this.headers});
  }
  /** Login User */
  /**
   * @param  {any} authData
   */
  loginUser(authData:any) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}api/account/authenticate/`, body, {headers: this.headers});
  }

/** Get Authentication Headers */
  getAuthHeaders() {
    const token = this.cookieService.get('auth-token');
    const t = localStorage.getItem('user');
    let user:any=null;
    if(t){
    user=JSON.parse(t);
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${user.token}`
    });

  }
/** Get User Data  */
  getUserData(){

       const userid = this.cookieService.get('userid-token');
       const username = this.cookieService.get('username-token');
       const firstname =this.cookieService.get('firstname-token');
       const lastname =this.cookieService.get('lastname-token');
       const user={userid: userid, username:username, firstname:firstname,lastname:lastname}
       return user
  }
/** Get User Id */
  getUserId(){

    const userid = this.cookieService.get('userid-token');
    return userid
}
/** Add To cart Product */
  addToCartSingle(product: any): void {
    const a = localStorage.getItem("cart_item");
    let s: any[];
    if (a){
    s= JSON.parse(a);
    console.log(s);
    for ( var val in s){
      if (s[val].productlist.ProductId==product.ProductId){
        s[val].num++;
        localStorage.setItem("cart_item", JSON.stringify(s));
        return;

      }

    }

    s.push({productlist: product, num: 1});
    localStorage.setItem("cart_item", JSON.stringify(s));
    }

    else{
      s=[];
      s.push({productlist: product, num: 1});
      localStorage.setItem("cart_item", JSON.stringify(s));

    }
  }
  /** Get Cart Item */
  getCart(){
    const a =localStorage.getItem("cart_item")
    if (a!==null){

      return JSON.parse(a);
      }
      else{
        return [];
      }
  }
  addNum(id: any){

    const a = localStorage.getItem("cart_item");
    let s: any[];
    if (a){
    s= JSON.parse(a);
    for ( var val in s){
      if (s[val].productlist.ProductId==id){
        s[val].num++;
        localStorage.setItem("cart_item", JSON.stringify(s));
        return;
      }
    }
  }
}
minusNum(id: any){

  const a = localStorage.getItem("cart_item");
  let s: any[];
  if (a){
  s= JSON.parse(a);
  for ( var val in s){
    if (s[val].productlist.ProductId==id){
      if (s[val].num>0)
      {s[val].num--;}
      localStorage.setItem("cart_item", JSON.stringify(s));
      return;
    }
  }
}
}
/** delete Cart */
  deleteCart(){
    localStorage.removeItem('cart_item');

  }
 /** Get Order Value */
  totalOrderValue(){
    const OrderItems=this.orderItems();
    let sum=0;
    for ( var val of OrderItems){
      let value=0;
      if(val.productlist.ProductFeaturedPrice){
        value=val.productlist.ProductFeaturedPrice;
      }
      else{
        value=val.productlist.ProductPrice;
      }
      sum=sum+value
    }
    return sum

  }
  /** Order Items */
  orderItems(){
    const a = localStorage.getItem("cart_item");
    let s: any[];
    let OrderItems: any[] =[];
        if (a){
      s= JSON.parse(a);
      for ( var val of s){
        OrderItems.push({ProductId: val.productlist.ProductId,ProductQuantity:val.num})
      }
    }
    return OrderItems;

  }
/** Place Order */
 placeOrder(){

    const OrderItems=this.orderItems();
    const u=localStorage.getItem('user');
    let user:any=null;
    if(u){
    user = JSON.parse(u);}
    const order = {
      OrderFlatShipping: true,
      OrderTotal: this.totalOrderValue,
      OrderCustomerId: user.userid,
      OrderShippingAddress: this.retrieveShipping(),
      OrderItems: OrderItems,
    }
      const body = JSON.stringify(order);
    return this.httpClient.post<any>(`${this.baseOrdersUrl}`, body, {headers: this.getAuthHeaders()});
}
/** Create Shipping Address */
createShippingAddress(data:any){
  const body = JSON.stringify(data);
  return this.httpClient.post(`${this.baseShippingUrl}`, body, {headers: this.getAuthHeaders()});

}
/** Retrieve Shipping */
retrieveShipping(){
  const ship = localStorage.getItem("ship");
  let s:any=null;
  if (ship){
  s=JSON.parse(ship);
  }
  return s.ShippingAddressId
}
/** Get Orders by User */
getOrdersByUser(){
  const u=localStorage.getItem('user');
    let user:any=null;
    if(u){
    user = JSON.parse(u);}
    return this.httpClient.get<Order[]>(`${this.baseOrdersUserUrl}${user.userid}/`, {headers: this.headers});

}
/** Get Recommended Products */
getRecommendedProducts(term:string){
  return this.httpClient.get(`${this.baseRecomUrl}${term}/`, {headers: this.headers});

}
}

