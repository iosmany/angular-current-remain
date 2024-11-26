import { Route } from "@angular/router";

export const routes: Route[] = [
    { path: '', loadComponent: () => import('./posts.component').then(m => m.PostsComponent) },  
    { path: 'post/:id', loadComponent: () => import('./post-detail/post-detail.component').then(m => m.PostDetailComponent) }  
]