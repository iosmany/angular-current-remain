import { Component, OnDestroy, OnInit } from '@angular/core';
import { BuyProductButtonComponent } from '../components/buyproductbutton.component';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ios-product-detail',
  imports: [ BuyProductButtonComponent, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy{

  product?: Product = undefined;
  suscription!: Subscription;

  constructor(private route: ActivatedRoute,private productService: ProductService) {}

  ngOnInit(): void {
    this.suscription = this.route.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
          this.productService
            .getProduct(productId)
            .subscribe(product => this.product = product);
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions
    this.suscription.unsubscribe();     //always unsubscribe to avoid memory leaks
  }

}
