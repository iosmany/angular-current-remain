import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { ProductResponse } from './services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'ios-products',
  imports: [ ProductCardComponent, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    
    this.productService.getProducts()
      .subscribe((response: ProductResponse) => {
        this.products = response.products;
      });
  }
}

