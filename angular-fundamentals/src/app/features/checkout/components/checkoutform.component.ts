import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CheckoutModel } from "../checkout.models";


@Component({
    selector: "ios-checkout-form",
    imports: [
        FormsModule, 
        NgIf, 
        ReactiveFormsModule,
    ],
    templateUrl: "./checkoutform.component.html",
    styleUrls: ["./checkoutform.component.css"],
})
export class CheckoutFormComponent {
    checkoutForm: FormGroup;

    @Input() checkoutModel!: CheckoutModel;  
    @Output() formValidSubmitted: EventEmitter<any> = new EventEmitter<any>();

    constructor(private fb: FormBuilder) {
      this.checkoutForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        address: ['', Validators.required],
        cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
        expirationDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$')]],
        cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
      });
    }
  
    onSubmit() {
      if (this.checkoutForm.valid) {
        const model: CheckoutModel = this.checkoutForm.value;
        this.formValidSubmitted.emit(model);
      }
    }
}
