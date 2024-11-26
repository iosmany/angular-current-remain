
import { Route } from '@angular/router';

export const routes: Route[] = [
    { path: '', loadComponent: () => import('./cart.component').then(m => m.CartComponent) },
]