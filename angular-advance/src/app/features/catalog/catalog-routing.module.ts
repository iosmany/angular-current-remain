import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazyloading to ensure that the module is loaded only when the user navigates to the route
  { 
    path: '', 
    loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent),
    children: [
      { path: 'product/:id', loadComponent: () => import('./pages/product/product.component').then(m => m.ProductComponent) }, 
      { path: 'categories', loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent) },
    ]
  },  
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
