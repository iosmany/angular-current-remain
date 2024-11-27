import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem, CartService } from './services/cart.service';
import { Cart } from './services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ios-cart',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy {

  cart!: Cart
  suscription!: Subscription;
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.suscription= this.cartService.getCart().subscribe(cart => this.cart = cart);
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeProduct(item.product);
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions
    this.suscription.unsubscribe();     //always unsubscribe to avoid memory leaks
  }

}
