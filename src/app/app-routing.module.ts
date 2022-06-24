import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RegistreclientComponent } from './registreclient/registreclient.component';
import { DetailcategoryComponent } from './detailcategory/detailcategory.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { ListeproductComponent } from './listeproduct/listeproduct.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsubcategoriesComponent } from './listsubcategories/listsubcategories.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path : 'about', component:AboutComponent},
  {path :'contact', component:ContactComponent},
  {path:'listeproduct',component:ListeproductComponent},
  {path:'listecategory',component:ListecategorieComponent},
  {path :'listesubcategories', component:ListsubcategoriesComponent},
  {path: 'productdetail/:id', component:ProductdetailComponent},
  {path:'detailcategory/:id',component:DetailcategoryComponent},
  {path:'registreclient', component:RegistreclientComponent},
  {path:'addproduct',component:AddproductComponent} ,
  {path:'updateproduct/:id',component:UpdateproductComponent},
  {path:'updatecategory/:id',component:UpdatecategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
