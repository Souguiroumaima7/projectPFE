import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  submitted = false;
  form:FormGroup;
  id=this.activeroute.snapshot.params["id"]
  product:any

constructor(private activeroute : ActivatedRoute,private ProductService:ProductService, private formBuilder:FormBuilder, private route:Router) { }


 ngOnInit(): void {
  this.getproductbyid()
  this.form = this.formBuilder.group(
    {
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    })


 }

 getproductbyid() {
 this.ProductService.getbyid(this.id).subscribe((res:any)=>{
   this.product =res["data"]
   this.form.patchValue({
    name:res["data"].name,
    description:res["data"].description,
    price:res["data"].price,
    stock:res["data"].stock
   })
   console.log("detail product",this.product)
   })


   }

   updateproduct() {
    this.ProductService.updateproduct(this.id,this.form.value).subscribe((res:any) =>{
      console.log(res)
      Swal.fire("product updated")
      this.route.navigateByUrl("/listeproduct")
    })
   }
}

