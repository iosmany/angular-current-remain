import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { ProductResponse } from './services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ios-products',
  imports: [ ProductCardComponent, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = []
  suscription!: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    
    this.suscription= this.productService.getProducts()
      .subscribe((response: ProductResponse) => {
        this.products = response.products;
      });
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions
    this.suscription.unsubscribe();     //always unsubscribe to avoid memory leaks
  }
}

