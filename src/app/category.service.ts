import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http:HttpClient) { }
  getcategories() {
    return this.http.get(`${environment.baseurl}/categories/getall`)
  }
  deletecategories(id:any){
    return this.http.delete(`${environment.baseurl}/categories/delete/${id}`)
  }
  getcbyid(id:any){
    return this.http.get(`${environment.baseurl}/categories/getcatbyid/${id}`)
  }

  updatecategory(id:any,category:any) {
    return this.http.put(`${environment.baseurl}/categories/update/${id}`,category)
  }
}
