import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private data = [
        {
            category: 'Bananes plantain',
            expanded: true,
            products: [
                { id: 0, name: 'Bananes non-mûr', price: '400', amount: '3'},
                { id: 1, name: 'Bananes mûr', price: '400', amount: '3' },
                { id: 2, name: 'Bananes Aloko', price: '200', amount: '3'}
            ]
        },
        {
            category: 'Ignames',
            products: [
                { id: 3, name: 'Kponan', price: '500' },
                { id: 4, name: 'Assawa', price: '300' },
                { id: 5, name: 'Lokpa', price: '1000' },
                { id: 6, name: 'Krenglè', price: '300' },
                { id: 7, name: 'Bètè Bètè', price: '500' },
                { id: 8, name: 'Florido', price: '300' }
            ]
        },
        {
            category: 'Manioc-Patate douce-Taro',
            products: [
                { id: 9, name: 'Manioc Blanc', price: '100' },
                { id: 10, name: 'Manioc Rouge', price: '100' },
                { id: 11, name: 'Patate Douce', price: '300' },
                { id: 12, name: 'Taro', price: '500' },
            ]
        }
    ];

    private cart = [];

  constructor() { }

    getProducts() {
        return this.data;
    }

    getCart() {
        return this.cart;
    }
    addProduct(product) {
        this.cart.push(product);
    }
}
