import { Component, OnInit } from '@angular/core';
import { BuyProductButtonComponent } from '../components/buyproductbutton.component';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'ios-product-detail',
  imports: [ BuyProductButtonComponent, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product?: Product = undefined;

  constructor(private route: ActivatedRoute,private productService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
          this.productService
            .getProduct(productId)
            .subscribe(product => this.product = product);
      }
    });
  }

}
