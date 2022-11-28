import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  productAddUrl="http://localhost:4000/api/v1/product/addProduct"
  constructor(private http:HttpClient) { }

  addProductData(data:any)
  {
    return  this.http.post(this.productAddUrl,data);
  }
  getProductData(){
    return this.http.get('http://localhost:4000/api/v1/product/getProduct');
  }
  deleteProductData(id:any){
    return this.http.delete(`http://localhost:4000/api/v1/product/deleteProduct/${id}`);
  }
  
  getByIdProduct(id:any){
    return this.http.get(`http://localhost:4000/api/v1/product/getProductById/${id}`);
  }

  editProductData(id:any,data:any){
    return this.http.patch(`http://localhost:4000/api/v1/product/editproduct/${id}`, data);
  }

}
