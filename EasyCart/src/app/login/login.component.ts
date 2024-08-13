import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  CusServiceService } from '../cus-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
    //email:any;
   // password:any;
    customer:any;

  constructor(private router:Router, private service: CusServiceService) { 
     //this.customer={cusId:'',custName:'' ,email : ' ',gender:'', mobile : ' '};
  } 
  ngOnInit(): void {
  }

 /* loginSubmit():void{
    
    console.log(this.email);
    console.log(this.password);
    alert("hello");
    this.service.loginService(this.email, this.password).subscribe((result:any) => {console.log(result); this.customer = result;
      if(this.customer != null){
      // this.router.navigate(['products']);
       this.router.navigate(['register']);
        sessionStorage.setItem('customer', JSON.stringify(this.customer));
       }
       else{
        alert("Invalid credentials");
      
       }
     
      });
    }*/
    loginSubmit(loginForm:any):void{
       this.service.loginService(loginForm.email, loginForm.password).subscribe((result:any) => {console.log(result); this.customer = result;
        if(this.customer != null){
          alert("login successful");
          sessionStorage.setItem('customer', JSON.stringify(this.customer));
          this.router.navigate(['products']);
         
        }
        else{
          alert("Invalid credentials");
        }
       
        });
      }
      


    gotoregister(){
      this.router.navigate(['register']);
    }
  }