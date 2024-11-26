import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    //pages
    CatalogComponent,
    ProductComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    HttpClient
  ],
})
export class CatalogModule { }
