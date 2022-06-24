import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  registreclient (client:any) {
    return this.http.post(`${environment.baseurl}/clients/register`,client)
  }
}


