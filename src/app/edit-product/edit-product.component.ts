import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

import { ApiServicesService } from '../service/api-services.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  getData:any;
  data:any;
  editProductForm:any;
  id:any;
  myForm:any;
  fb:any;
  sendData:any;



createOrderForm: FormGroup = new FormGroup({});
  constructor(private api : ApiServicesService, private router : ActivatedRoute,private formBuilder: FormBuilder, private routes : Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.api.getByIdProduct(this.id).subscribe((result: any) => {
      this.data = result.result;
      console.log(this.data)

    }) 

    this.createOrderForm = this.formBuilder.group({
      productName: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      info: ['', Validators.compose([Validators.required])],

  })
}
 
  onSubmit() {
    this.myForm = document.getElementById('updateProduct');
    this.fb = new FormData(this.myForm);
    this.sendData={};
    console.log(this.sendData)
    for (var [key, value] of this.fb.entries()) { 
      this.sendData[key] = value;
    }

    this.api.editProductData(this.id, this.sendData).subscribe(data => {
      this.routes.navigate(['']);
    });
}
  
  


}
