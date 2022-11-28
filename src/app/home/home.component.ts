import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiServicesService } from '../service/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getData:any;  submitted = false;
productForm = new FormGroup({
  productName : new FormControl('',Validators.required),
  price : new FormControl('',Validators.required),
  description : new FormControl('',Validators.required),
  info : new FormControl('',Validators.required),
})

  constructor(private api : ApiServicesService) { }
  get productName(): any {
    return this.productForm.get('productName')
  }
  get price(): any {
    return this.productForm.get('price')
  }
  get description(): any {
    return this.productForm.get('description')
  }
  get info(): any {
    return this.productForm.get('info')
  }
  

  ngOnInit(): void {
    this.getProduct();
  }
  addProductData(data:any){
    this.api.addProductData(this.productForm.value).subscribe((data:any)=>{
      this.getProduct();
      this.submitted = true;

      if (this.productForm.valid) {
        console.log("Form Submitted!");
        this.productForm.reset();
      }
    })
  }
  getProduct(){
    this.api.getProductData().subscribe((result:any)=>{
      this.getData = result.result;
    })
  }
  deleteProduct(id:any){
    this.api.deleteProductData(id).subscribe((res:any)=>{
      this.getProduct();
    })
  }
  getByIDdProduct(id:any){
    console.log(id)
  }
}
