import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from './services/cart.service';
import { Cart } from './services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ios-cart',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit {

  cart!: Cart
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => this.cart = cart);
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeProduct(item.product);
  }

}
