
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { CusServiceService } from '../cus-service.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {
  imageURL: string;
  uploadForm: FormGroup;
  fileToUpload :File = null;
  constructor(public fb: FormBuilder,private service :  CusServiceService ) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    });
    this.imageURL = '/assets/Images/';
  }

  ngOnInit(): void { }


  
  showPreview(event) {
    this.fileToUpload = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: this.fileToUpload
    });
    this.uploadForm.get('avatar').updateValueAndValidity()

    
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.fileToUpload)
  }

  
  submit(imageForm : any) {
   // this.service.PostFile(imageForm,this.fileToUpload).subscribe(data => {console.log('done');
    //this.imageURL = '/assets/images/default.png';});
   // console.log(this.uploadForm.value);


  }
}
