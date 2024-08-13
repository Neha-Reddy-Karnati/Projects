import { Component, OnInit } from '@angular/core';
import { CusServiceService } from '../cus-service.service';
import { Router } from '@angular/router';
declare var jQuery:any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any;
  editObject:any;
  customer:any;
  amount:any;
  atime:any;
  address:any;
  constructor(private service :CusServiceService,private router:Router) {
    this.cartItems=this.service.cartItems;
    this.amount=this.service.amount;
    this.editObject={};
    console.log(this.service.cartItems);
    this.customer =  JSON.parse(sessionStorage.getItem('customer'));
    this.address='';
   }

  ngOnInit(): void {
   
    
  }

  Buy(){
    this.service.confirmOrders(this.customer,this.amount,this.cartItems,this.address).subscribe();
    alert("order placed successfully");
  }
  /*purc hase(){
  console.log("sent");
  
    this.router.navigate(['payment']);
  }*/

  
/*confirm(){
    //alert("method called");
    jQuery('#arrivalModel').modal('show');

}
ok(){
  sessionStorage.setItem("arrivalTime",this.atime);
  this.router.navigate(['payment']);
}*/

delete(item:any){
  this.service.delete(item);
  this.amount=this.service.amount;

}
edit(item:any){
    this.editObject=item;
    alert('edit called');
    jQuery('#quantityModel2').modal('show');
    this.amount=this.service.amount;
}
update(){
  this.service.update(this.editObject);
  this.amount=this.service.amount;
}

showpopup2(){
  jQuery('#addressModel').modal('show');

}


}



