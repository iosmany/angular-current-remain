import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { BuyProductButtonComponent } from '../components/buyproductbutton.component';

@Component({
  selector: 'ios-product-card',
  imports: [ CommonModule, BuyProductButtonComponent ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor() {}

  buyProductCallback(){
    alert(`Product bought ${this.product?.id}`);
  }


}
