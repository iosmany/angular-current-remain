import { Routes } from '@angular/router';
import { CatalogComponent } from './features/catalog/pages/catalog/catalog.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.routes').then(m => m.routes) },
];
