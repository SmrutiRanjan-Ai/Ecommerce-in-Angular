import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { HomefeatureComponent } from './homefeature/homefeature.component';
import { TopproductsComponent } from './topproducts/topproducts.component';
import { RecommendedproductsComponent } from './recommendedproducts/recommendedproducts.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { ApiService } from './api.service';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OrderformComponent } from './orderform/orderform.component';
import { OrderComponent } from './order/order.component';
import { OrderloginComponent } from './orderlogin/orderlogin.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentconfirmationComponent } from './paymentconfirmation/paymentconfirmation.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomesliderComponent,
    HomefeatureComponent,
    TopproductsComponent,
    RecommendedproductsComponent,
    FooterComponent,
    HomepageComponent,
    ProductComponent,
    ProductsComponent,
    CardComponent,
    SearchComponent,
    AuthComponent,
    LoginComponent,
    CartComponent,
    ShippingComponent,
    OrderformComponent,
    OrderComponent,
    OrderloginComponent,
    PaymentComponent,
    PaymentconfirmationComponent,
    OrderconfirmationComponent,
    CategoriesComponent,
    CategoryComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
