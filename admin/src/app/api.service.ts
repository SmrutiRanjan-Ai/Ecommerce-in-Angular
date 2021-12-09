import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Category, Order, Product, Tax} from './core'

@Injectable({
  providedIn: 'root'
})
/** Service Communication WIth Backend */
export class ApiService {
  /** Base URL FOr backend EDIT HERE  */
  baseUrl = 'http://127.0.0.1:8000/';
  baseProductsUrl = `${this.baseUrl}api/product/`;
  baseOrdersUrl = `${this.baseUrl}api/order/`;
  baseCategorysUrl = `${this.baseUrl}api/category/`;
  baseTaxUrl = `${this.baseUrl}api/tax/`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  getOrders() {
    return this.httpClient.get<Order[]>(this.baseOrdersUrl, {headers: this.getAuthHeaders()});
  }
  getProducts() {
    return this.httpClient.get<Product[]>(this.baseProductsUrl, {headers: this.headers});
  }
  getOrder(id:string) {
    return this.httpClient.get<Product[]>(`${this.baseOrdersUrl}${id}/`, {headers: this.headers});
  }

  updateOrder(id: string, order:any){
    const body = JSON.stringify(order);
    return this.httpClient.put(`${this.baseOrdersUrl}${id}/`, body, {headers: this.getAuthHeaders()});
  }
  updateProduct(id: string, product:any){
    const body = JSON.stringify(product);
    return this.httpClient.put(`${this.baseProductsUrl}${id}/`, body, {headers: this.getAuthHeaders()});
  }

  createProduct(product: any) {
    const body = JSON.stringify(product);
    return this.httpClient.post(`${this.baseProductsUrl}`, body, {headers: this.getAuthHeaders()});
  }


  loginUser(authData:any) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {headers: this.headers});
  }


  getAuthHeaders() {
    const token = this.cookieService.get('auth-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }
  getCategories() {
    return this.httpClient.get<Category[]>(`${this.baseCategorysUrl}`, {headers: this.headers});
  }
  updateCategory(id: string, data:any){
    const body = JSON.stringify(data);
    return this.httpClient.put(`${this.baseCategorysUrl}${id}/`, body, {headers: this.getAuthHeaders()});
  }
  createCategory(data: any) {
    const body = JSON.stringify(data);
    return this.httpClient.post(`${this.baseCategorysUrl}`, body, {headers: this.getAuthHeaders()});
  }
  getTaxes() {
    return this.httpClient.get<Tax[]>(`${this.baseTaxUrl}`, {headers: this.headers});
  }

}
