import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { LoginFormComponent } from './ecommerce/login-form/login-form.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { RegisterFormComponent } from './ecommerce/register-form/register-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  {
    path: "portal",
    component: PortalComponent
  },
  { 
    path:"" , 
    redirectTo: "/portal",
    pathMatch:"full"
  },
  {
    path:"login-form",
    component:LoginFormComponent,  
  },
  {
    path: "register-form/login-form",
    redirectTo: "/login-form",
    pathMatch:"full"
  },
  {
    path: "login-form/register-form",
    redirectTo: "/register-form",
    pathMatch:"full"
  },
  {
    path: "register-form",
    component: RegisterFormComponent,
  },
  {
    path: "welcome/logout",
    redirectTo:"/login-form",
    pathMatch:"full"
  },
  {
    path: "welcome",
    component: NavBarComponent,
    // pathMatch: "full",
    children : 
    [
      { 
        path:"" , 
        redirectTo: "/welcome/home",
        pathMatch:"full"
      },
      {
        path : "home",
        component: EcommerceComponent,
        pathMatch : "full"
      },
      // {
      //   path: "profile",
      //   component: ,
      //   pathMatch: "full"
      // },
      // {
      //   path: "cart",
      //   component: ,
      //   pathMatch: "full"
      // },      
      {
        path: "orders",
        component: OrdersComponent,
        pathMatch: "full"
      },
      {
        path: "products",
        component: ProductsComponent,
        pathMatch: "full"
      }
    ]
}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
