import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getproducts() {
    return this.http.get(`${environment.baseurl}/products/getall`)
  }
  deleteproducts(id:any) {
    return this.http.delete(`${environment.baseurl}/products/delete/${id}`)
  }
  getbyid (id:any) {

     return this.http.get(`${environment.baseurl}/products/getone/${id}`)
  }
 addproduct(product:any) {
  return this.http.post(`${environment.baseurl}/products/create`,product)
 }
  updateproduct(id:any,product:any) {
    return this.http.put(`${environment.baseurl}/products/update/${id}`,product)    
  }   
  
  }
     


