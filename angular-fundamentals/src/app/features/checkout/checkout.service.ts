import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class CheckoutService {
    constructor(private httpClient: HttpClient) {
        console.log('CheckoutService initialized');
    }

    submitOrder(order: any) {
        return this.httpClient.post('api/orders', order);
    }
}