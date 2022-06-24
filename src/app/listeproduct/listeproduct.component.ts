import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listeproduct',
  templateUrl: './listeproduct.component.html',
  styleUrls: ['./listeproduct.component.css']
})
export class ListeproductComponent implements OnInit {
 listeproduct:any
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {

  this.getall()
  }

  getall () {
    this.ProductService.getproducts().subscribe((res:any)=>{
      this.listeproduct = res["data"]
      console.log("list product", this.listeproduct)
    })
  }
    deleteproducts(id:any) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.ProductService.deleteproducts(id).subscribe((res:any)=>{
            console.log(res)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.getall()
        })
      }
      })
    }
  }




