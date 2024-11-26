import { Component, OnInit } from '@angular/core';
import { BuyProductButtonComponent } from '../components/buyproductbutton.component';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ios-product-detail',
  imports: [ BuyProductButtonComponent, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product?: Product = undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
        fetch('https://dummyjson.com/products/' + productId).then(response => {
          return response.json();
        }).then((result) => {
          this.product = result;
        }).catch((err) => {
          console.error(err);
        });
      }
    });
  }

}
