import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { CartService } from '../cart.service';


@Component({
    selector: 'app-feculent',
    templateUrl: 'feculent.page.html',
    styleUrls: ['feculent.page.scss'],
})
export class FeculentPage implements OnInit {

    cart = [];
    items = [];

    sliderConfig = {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 1.6
    };

    constructor(private cartService: CartService,
                private router: Router) {}

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
