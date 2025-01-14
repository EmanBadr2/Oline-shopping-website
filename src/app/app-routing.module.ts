import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';




const routes: Routes = [
  { path:'', redirectTo:'home' , pathMatch:'full'},

  { path:'home', component:HomeComponent},
  { path:'products', component:ProductsComponent},
  { path:'Productdetails/:id', component:ProductDetailsComponent},
  { path:'navbar', component:NavbarComponent},
  { path:'Categories', component:CategoriesComponent},
  { path:'cart', component:CartComponent},
  { path:'login', component:LoginComponent },
  
  { path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
