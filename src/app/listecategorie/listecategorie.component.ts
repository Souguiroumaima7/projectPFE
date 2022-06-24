import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listecategorie',
  templateUrl: './listecategorie.component.html',
  styleUrls: ['./listecategorie.component.css']
})
export class ListecategorieComponent implements OnInit {
  listecategory:any

  constructor(private CategoryService:CategoryService) { }

  ngOnInit(): void {
    this.getall()
  }
  getall () {
    this.CategoryService.getcategories().subscribe((res:any)=>{
      this.listecategory = res["data"]
      console.log("listecategory", this.listecategory)
    })

  }
}
