import { Route } from "@angular/router";

export const routes: Route[] = [
    { path: '', loadComponent: () => import('./checkout.component').then(m => m.CheckoutComponent) },  
]