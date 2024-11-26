import { Route } from "@angular/router";

export const routes: Route[] = [
    { path: '', loadComponent: () => import('./products.component').then(m => m.ProductsComponent) },  
    { path: 'product/:id', loadComponent: () => import('./product-detail/product-detail.component').then(m => m.ProductDetailComponent) }  
]