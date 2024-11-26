import { Component, Input, Output, EventEmitter, Inject } from "@angular/core";
import { Product } from "../models/product.model";
import { CartService } from "../../cart/services/cart.service";

@Component({
    selector: 'ios-buyproduct-button',
    template: `
    <button (click)="buyButtonClicked()" class="btn btn-success btn-sm me-3">
            <i class="bi bi-cart-plus"></i> Add To Cart
          </button>
    `
})
export class BuyProductButtonComponent {

    @Input() product!: Product;  
    @Output() onBuyEvent: EventEmitter<Product> = new EventEmitter<Product>();

    constructor(private cartService: CartService) {}

    buyButtonClicked() {
        this.cartService.addProductToCart(this.product);
        this.onBuyEvent.emit(this.product);
    }
}