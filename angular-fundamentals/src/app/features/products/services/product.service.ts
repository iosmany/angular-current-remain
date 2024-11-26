
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export interface ProductResponse{
    limit: number;
    skip: number;
    total: number;
    products: Product[];
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>('https://dummyjson.com/products?limit=10');
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>('https://dummyjson.com/products/' + id);
  }
}