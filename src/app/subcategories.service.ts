import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  constructor(private http:HttpClient) { }
 getsubcategories() {
    return this.http.get(`${environment.baseurl}/subcategories/getAll`)
  }
}



