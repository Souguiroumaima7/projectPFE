import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ListeproductComponent } from './listeproduct/listeproduct.component';
import {HttpClientModule} from '@angular/common/http';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { ListsubcategoriesComponent } from './listsubcategories/listsubcategories.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { DetailcategoryComponent } from './detailcategory/detailcategory.component';
import { RegistreclientComponent } from './registreclient/registreclient.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    ListeproductComponent,
    ListecategorieComponent,
    ListsubcategoriesComponent,
    ProductdetailComponent,
    DetailcategoryComponent,
    RegistreclientComponent,
    AddproductComponent,
    UpdateproductComponent,
    UpdatecategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
