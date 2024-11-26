import { Inject, Injectable } from "@angular/core";
import { Product } from "../../products/models/product.model";
import { LOCAL_STORAGE } from "../../../tokens/storage.token";
import { Observable, of } from "rxjs";

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    total: number;
    addProduct: (product: Product, qty: number) => void;
    remove: (item: CartItem) => void;
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

    remove(item: CartItem) {
        this.items = this.items.filter(i => i.product.id !== item.product.id);
        this.total -= item.product.price * item.quantity;
    };
}

@Injectable({
    providedIn: 'root'
})
export class CartService {

    readonly key: string = 'cart';

    constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {}

    getCart(): Observable<Cart> {
        const cartJson = this.localStorage.getItem(this.key);
        const cart= cartJson ? new CartImpl(JSON.parse(cartJson)) : new CartImpl(); //ensure always return a cart object
        return of(cart);
    }

    setCart(cart: Cart) {
        this.localStorage.setItem(this.key, JSON.stringify(cart));
    }

    addProductToCart(product: Product, qty: number = 1) {
        this.getCart().subscribe(cart => {
            cart.addProduct(product, qty);
            this.setCart(cart);
            console.log('Product added to cart', product);
        });
    }

    removeProduct(product: Product) {
        this.getCart().subscribe(cart => {
            const item = cart.items.find(i => i.product.id === product.id);
            if (item) {
                cart.remove(item);
                this.setCart(cart);
                console.log('Product removed from cart', product);
            }
        });
    }
}

