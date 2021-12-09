
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'portal', component: MainComponent},
  {path: "portal/order/:id", component: OrderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
