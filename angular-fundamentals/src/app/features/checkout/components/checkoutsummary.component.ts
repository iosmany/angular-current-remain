import { CommonModule, NgIf } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CheckoutModel } from "../checkout.models";


@Component({
    selector: "ios-checkout-summary",
    imports: [
        CommonModule
    ],
    templateUrl: "./checkoutsummary.component.html",
    styleUrls: ["./checkoutsummary.component.css"],
})
export class CheckoutSummaryComponent implements OnInit {

    total: number = 0;
    @Input() checkoutModel!: CheckoutModel;

    constructor() {}

    ngOnInit() {
        // Initialize component here
        this.checkoutModel.orderItems.forEach((item) => {
            this.total += item.price * item.quantity;
        });
    }

    onCheckout() {
        // Handle checkout logic here
    }
  
}
