import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailcategory',
  templateUrl: './detailcategory.component.html',
  styleUrls: ['./detailcategory.component.css']
})
export class DetailcategoryComponent implements OnInit {

    id=this.activeroute.snapshot.params["id"]
   category:any
  constructor(private activeroute : ActivatedRoute , private categoryservice:CategoryService) { }

  ngOnInit(): void {
    console.log("id",this.id)
    this.getcategorybyid()
  }

  getcategorybyid() {
  this.categoryservice.getcbyid(this.id).subscribe((res:any)=>{
    console.log(res)
    this.category =res["data"]
    console.log("detail category",this.category)
    })
}
}
