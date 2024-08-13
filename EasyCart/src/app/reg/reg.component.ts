import { Component, OnInit } from '@angular/core';
import { CusServiceService } from '../cus-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  /*--customerDetails:any;
  user:any;
  s : any;*/
  constructor(private service: CusServiceService, private router:Router) {
 //this.customerDetails={custId :'', custName:'', password:'', gender:'',mobile:'',email:''};
  //this.s={custId :'2', custName:'xx', password:'sdnbvcZx', gender:'wefgfdssdfb ', email:'qwehgf',mobile : '34567890-'};
}

  ngOnInit(): void {
  }
 
 /* registerSubmit(registerForm: any) {
    console.log("Hello"+registerForm);
    console.log(this.customerDetails);
   // console.log(jQuery('#confPass').val());
    console.log(registerForm.password);
   // if (registerForm.password === jQuery('#confPass').val()) {
      
     
     this.service.registerCus(registerForm).subscribe((result:any)=>{console.log(result)});
   // console.log(this.user);
        this.router.navigate(['login']);
        
    //  }
   // else {
    
    //}

     

  }

  reg():any{
    this.service.registerCus(this.s).subscribe((result:any)=>{console.log(result)});
    console.log(this.s);
        this.router.navigate(['login']);
  } */
  register(registerForm: any): void {
    this.service.registerCus(registerForm).subscribe((result: any) => { console.log(result); } );
    console.log(registerForm);
    alert("registration successful");
    this.router.navigate(['login']);
  }
}



