

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

interface CheckoutModel {
  name: string;
  email: string;
  address: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

@Component({
  selector: 'ios-tmp-checkout',
  imports: [FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateFormComponent {
  checkoutModel: CheckoutModel;

  constructor() {
    this.checkoutModel = {
      name: '',
      email: '',
      address: '',
      cardNumber: '',
      expirationDate: '',
      cvv: ''
    };
  }

  onSubmit() {
    
  }
}