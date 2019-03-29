import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    data = '';
   constructor(public navCtrl: NavController,
               private router: Router,
               private authService: AuthService,
               private storage: Storage) { }

     ngOnInit() {

     }
    openCart() {
        this.router.navigate(['cart']);
    }


    logout() {
        this.authService.logout();
    }
}

