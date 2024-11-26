import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ios-product-card',
  imports: [ CommonModule ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product?: Product;

  addToCart(product: Product) {
    console.log('Add to cart', product);
  }

}
