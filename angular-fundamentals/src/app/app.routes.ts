import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'posts', loadChildren: () => import('./features/posts/posts.routes').then(m => m.routes) },
    { path: 'products', loadChildren: () => import('./features/products/products.routes').then(m => m.routes) },

    { path: 'cart', loadChildren: () => import('./features/cart/cart.routes').then(m => m.routes) },
    { path: 'checkout', loadChildren: () => import('./features/checkout/checkout.routes').then(m => m.routes) },

];
