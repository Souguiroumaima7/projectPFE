import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
category:any
submitted = false;
form:FormGroup;
id=this.activeroute.snapshot.params["id"]
  constructor(private CategoryService:CategoryService,private activeroute:ActivatedRoute, private formBuilder:FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.getproductbyid()
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required]
      })
  }
  getproductbyid() {
    this.CategoryService.getcbyid(this.id).subscribe((res:any)=>{
      this.category =res["data"]
      this.form.patchValue({
       name:res["data"].name,
       description:res["data"].description,
      })
      console.log("detail product",this.category)
      })
    }
      updatecategory(): void {
        this.CategoryService.updatecategory(this.id,this.form.value).subscribe((res:any) =>{
          console.log(res)
          Swal.fire("category updated")
          this.route.navigateByUrl("/listecategory")
        })
    }

  }



  
