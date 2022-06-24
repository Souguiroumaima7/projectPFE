import { FormGroup, Validators } from '@angular/forms';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  submitted = false;
  form:FormGroup;

  constructor(private formBuilder: FormBuilder,private ProductService:ProductService) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name:['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        stock: ['', Validators.required],
      })
  }

  get f()  {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;

     this.ProductService.addproduct(this.form.value).subscribe((res:any)=>{
    console.log(res)
   })
   console.log(JSON.stringify(this.form.value, null, 2))
  }
 onReset(): void {
   this.submitted = false;
   this.form.reset();
 }
}




