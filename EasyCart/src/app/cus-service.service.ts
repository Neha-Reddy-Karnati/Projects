import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class CusServiceService {
  cartItems=[];
  amount = 0;
  cartItem:any;
  displayCartItems=[];

  constructor(private httpClient: HttpClient) {
    this.cartItem={proId:'',proImage:' ', price:'', quantity:'', totalPrice:''};

  }

  addToCart(cartItem:any){
    var element = _.findWhere(this.cartItems,{proId: cartItem.product.proId});
    if(typeof(element) == 'undefined' && element == null){
      console.log('Cart Item : ', cartItem.product);
      this.displayCartItems.push({product:cartItem.product,quantity:cartItem.quantity,totalPrice:cartItem.totalPrice});
      console.log('Cart Items : ', this.cartItems);
      this.cartItems.push({proId: cartItem.product.proId ,quantity  : cartItem.quantity, price: cartItem.price, totalPrice: cartItem.totalPrice});
   }else{
    element.quantity = parseInt(element.quantity)  + parseInt(cartItem.quantity);
    element.totalPrice = parseInt(element.quantity) * parseFloat(element.price);
  }this.calcAmount();
  }

  calcAmount():any{
    this.amount=0;
    for(let i = 0; i < this.cartItems.length;i++){
  
      this.amount+= parseFloat(this.cartItems[i].totalPrice);
        console.log(this.cartItems[i].totalPrice)
      }
      console.log(this.amount)
  }


  getAllEmployees() {
    return this.httpClient.get('EASYCART/webapi/myresource1/getAllProducts');
  }
  registerCus(customer: any) {
    return this.httpClient.post('EASYCART/webapi/myresource1/registerCus', customer);
    
   }
   loginService(email:any,password:any):any{
    return this.httpClient.get('EASYCART/webapi/myresource1/cusLogin/'+ email + '/' + password);
  }

  confirmOrders(customer:any,amount:any,cartItems:any,address:any){
    // console.log("service");
    // console.log(orderType);
    // console.log(amount);
    // console.log(bookDetails);
    // console.log('Inside Service : ', this.cartItems);
    const formData:FormData = new FormData();
    formData.append('custId', customer.custId);
    console.log(customer.custId);
    console.log('Inside Service : ', this.cartItems);
    formData.append('items', JSON.stringify(this.cartItems));
    formData.append('amount', amount);
    formData.append('address',address);
    console.log(amount);
    this.displayCartItems.splice(0, this.cartItems.length);
    return this.httpClient.post('EASYCART/webapi/myresource1/confirmOrders', formData);
    
  }

  delete(item:any){
   const i = this.cartItems.findIndex((element) => { return element.proId == item.proId;});
   this.cartItems.splice(i , 1);
   this.displayCartItems.splice(i , 1);
   this.calcAmount();
   
   }
   update(editObject:any){
     
    var element = _.findWhere(this.cartItems,{proId:editObject.proId});
    console.log(element);
    element.quantity=editObject.quantity;
   
   element.totalPrice = parseInt(editObject.quantity) * parseFloat(editObject.price);
   this.calcAmount();
   }

   getOrdersByCustomerId(custId:any){
    console.log("api called");
    return this.httpClient.get('EASYCART/webapi/myresource1/getOrdersByCustomerId/' + custId);
  }
  
  getOrderDetailsByOrderId(orderId:any){
    return this.httpClient.get('EASYCART/webapi/myresource1/getOrderDetailsByOrderId/'+ orderId);
  }
  
 
}
