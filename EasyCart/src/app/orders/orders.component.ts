import { Component, OnInit } from '@angular/core';
import { CusServiceService } from '../cus-service.service';
import { Router } from '@angular/router';
var jQuery:any;
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
customer:any;
custId:any;
orders:any;
ordDetails:any;
ord:any;

  constructor(private service :CusServiceService,private router:Router) { }

  ngOnInit(): void {
    this.customer =  JSON.parse(sessionStorage.getItem('customer'));
    this.custId = this.customer.custId;
    this.service.getOrdersByCustomerId(this.custId).subscribe((result: any) => { console.log(result); this.orders = result; });
  
  }

  
  details(ord){
    this.service.getOrderDetailsByOrderId(ord.orderId).subscribe((result: any) => { console.log(result); this.ordDetails = result; });
    jQuery('#orderDetailsModel').modal('show');

  }


}
