import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { CatalogService } from '../services/catalog.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailResolver implements Resolve<Product> {
    
  constructor(private catalogService: CatalogService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    const productId = +route.paramMap.get('id')!;
    return this.catalogService.getProductById(productId);
  }
}
