import { Inject, Injectable } from "@angular/core";
import { Product } from "../../products/models/product.model";
import { LOCAL_STORAGE } from "../../../tokens/storage.token";

interface CartItem {
    product: Product;
    quantity: number;
}

interface Cart {
    items: CartItem[];
    total: number;
}

class CartImpl implements Cart {

    items: CartItem[] = [];
    total: number = 0;

    constructor(json: any = {}) {
        this.items = json ? json["items"] : [];
        this.total = json?  json["total"] : 0;
    }

    addProduct(product: Product, qty: number){
        const item = this.items.find(i => i.product.id === product.id);
        if (item) {
            item.quantity += qty;
        } else {
            this.items.push({ product, quantity: qty });
        }
        this.total += product.price * qty
    }
}

@Injectable({
    providedIn: 'root'
})
export class CartService {

    readonly key: string = 'cart';

    constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {}

    getCart(): CartImpl {
        const cartJson = this.localStorage.getItem(this.key);
        const cart= cartJson ? new CartImpl(JSON.parse(cartJson)) : new CartImpl(); //ensure always return a cart object
        return cart;
    }

    setCart(cart: Cart) {
        this.localStorage.setItem(this.key, JSON.stringify(cart));
    }

    addProductToCart(product: Product, qty: number = 1) {
        const cart = this.getCart();
        cart.addProduct(product, qty);
        this.setCart(cart);
        console.log('Product added to cart', product);
    }
}

