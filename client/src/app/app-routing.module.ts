import { OrderformComponent } from './orderform/orderform.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { TopproductsComponent } from './topproducts/topproducts.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { OrderloginComponent } from './orderlogin/orderlogin.component';
import { LoginComponent } from './login/login.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch:'full',
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'orderconfirmation',
    component: OrderconfirmationComponent,
  },

  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'orderlogin',
    component: OrderloginComponent,
  },
  {path: "category/:slug", component: CategoryComponent}
  ,
  {path: "products/:id", component: ProductComponent}
  ,
  {path: "search/:term", component: SearchComponent},
  {path: "login", component: LoginComponent},
  {path: "shipping", component: ShippingComponent}
  ,
  {path: "payment", component: PaymentComponent}
  ,
  {path: "user", component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
