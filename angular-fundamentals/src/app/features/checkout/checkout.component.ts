import { Component, OnInit } from '@angular/core';
import { CheckoutFormComponent } from './components/checkoutform.component';
import { CheckoutModel } from './checkout.models';
import { CartService } from '../cart/services/cart.service';
import { CheckoutSummaryComponent } from './components/checkoutsummary.component';

@Component({
  selector: 'ios-checkout',
  imports: [  
    CheckoutFormComponent,
    CheckoutSummaryComponent
  ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 
  checkoutModel!: CheckoutModel;
  constructor(private cartService: CartService) {}
  
  ngOnInit() {
    // Initialize component here
    this.cartService.getCart().subscribe(cart => {
      // Handle cart data here
      this.checkoutModel = {
        name: '',
        email: '',
        phone: '',
        address: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        orderItems: cart.items.map(item => {
          return {
            id: item.product.id,
            title: item.product.title,
            quantity: item.quantity,
            price: item.product.price
          };
        })
      }
    });
  }

  submitHandler(event: CheckoutModel) {
    // Handle form submission logic here
    
  }
}