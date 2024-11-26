

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { ApiResponse } from '../../../shared/api.utils';

interface ProductApiResponse extends ApiResponse<Product> {
  products: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductApiResponse> {
    return this.http.get<ProductApiResponse>(`${this.apiUrl}/products`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${productId}`);
  }
}
