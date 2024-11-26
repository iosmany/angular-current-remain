import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'posts', loadChildren: () => import('./feature/posts/posts.routes').then(m => m.routes) },
    { path: 'products', loadChildren: () => import('./feature/products/products.routes').then(m => m.routes) },
];
