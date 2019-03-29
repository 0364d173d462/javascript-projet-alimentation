import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-cereals',
    templateUrl: 'cereals.page.html',
    styleUrls: ['cereals.page.scss']
})
export class CerealsPage implements OnInit {

    constructor(private cartService: CartService,
                private router: Router) {}

    cart = [];
    items = [];

    ngOnInit() {
        this.cart = this.cartService.getCart();
        this.items = this.cartService.getProducts();
    }

    addToCart(product) {
        this.cartService.addProduct(product);
    }

    openCart() {
        this.router.navigate(['cart']);
    }

}
