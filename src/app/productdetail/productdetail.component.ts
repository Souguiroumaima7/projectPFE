import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
 id=this.activeroute.snapshot.params["id"]
   product:any
  constructor(private activeroute : ActivatedRoute,private ProductService:ProductService) { }

  ngOnInit(): void {
    console.log("id",this.id)
    this.getproductbyid()
  }
  getproductbyid() {
  this.ProductService.getbyid(this.id).subscribe((res:any)=>{
    this.product =res["data"]
    console.log("detail product",this.product)
    })
}

}
