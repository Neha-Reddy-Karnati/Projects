import { Component, OnInit } from '@angular/core';
import { CusServiceService } from '../cus-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var jQuery: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cartItem:any;
  cartItems: any;
  product : any;
  products: any;
  constructor(private service: CusServiceService, private router:Router,private http:HttpClient) {
    this.cartItem=[];
    this.cartItems=this.service.cartItems;
    this.product={proId:'' , catrgory:'', description:'',price:'',proImage:''};
   }
  ngOnInit() {
    this.service.getAllEmployees().subscribe((result: any) => { console.log(result); this.products = result; });
    sessionStorage.setItem('products', JSON.stringify(this.products));
  }

  showpopup(product:any){
      this.cartItem.product = product;
      this.cartItem.proImage = product.proImage;
      this.cartItem.price = product.price;
      this.cartItem.quantity = 0;
  
      jQuery('#quantityModel').modal('show');
    }

    addToCart(){
      this.cartItem.totalPrice = Number(this.cartItem.quantity) * Number(this.cartItem.price);
      this.service.addToCart(this.cartItem);
      console.log('Inside addto cart ', this.cartItem);
    }

    goToCart(){
      this.router.navigate(['cart']);
    }
    goToOrders(){
      this.router.navigate(['orders']);
    }

}
