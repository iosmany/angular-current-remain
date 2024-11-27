
export interface OrderItem {
    id: number;
    title: string;
    quantity: number;
    price: number;
}

export interface CheckoutModel {
    name: string;
    email: string;
    phone: string;
    address: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    orderItems: OrderItem[];
}

export interface OrderSubmitted {
    orderId: string;
    orderDate: Date;
    orderTotal: number;
    orderItems: OrderItem[];
}