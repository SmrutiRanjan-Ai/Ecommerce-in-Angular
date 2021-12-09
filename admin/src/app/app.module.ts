import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BrowseProductComponent } from './browse-product/browse-product.component';
import { OrdersComponent } from './orders/orders.component';
import { PosComponent } from './pos/pos.component';
import { OrderComponent } from './order/order.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddProductComponent,
    EditProductComponent,
    BrowseProductComponent,
    OrdersComponent,
    PosComponent,
    OrderComponent,
    MainComponent,
    AuthComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
