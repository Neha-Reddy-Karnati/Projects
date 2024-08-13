import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ProductsComponent } from './products/products.component';
import { ImagesComponent } from './images/images.component';
import { RoutingComponent } from './routing/routing.component';
import {LoginComponent} from './login/login.component';
//import {RegisterComponent} from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegComponent } from './reg/reg.component';
import { AboutComponent } from './about/about.component';
import {CartComponent} from './cart/cart.component';
import { TotalPipe } from './total.pipe';
import { OrdersComponent } from './orders/orders.component';




const appRoot: Routes = [{path:'',component:HomeComponent},
                         {path:'home',component: HomeComponent},
                         {path:'login',component: LoginComponent},
                         {path:'register',component:RegComponent},
                         {path:'addImage',component:ImagesComponent},
                         {path:'products',component:ProductsComponent},
                          {path:'about',component:AboutComponent},
                          {path:'cart',component:CartComponent},
                          {path:'orders',component:OrdersComponent}]

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ImagesComponent,
    ProductsComponent,
    RoutingComponent,
    RegComponent,
    LoginComponent,
    AboutComponent,
    CartComponent,
    TotalPipe,
    OrdersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule,
    ReactiveFormsModule ,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
