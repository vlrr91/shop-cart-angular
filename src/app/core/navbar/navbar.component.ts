import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CartShoppingService} from '../services/cart-shopping.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appName = 'Shopping Cart';
  itemsOrder: string;

  constructor(private router: Router,
              private cartShoppingService: CartShoppingService,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.cartShoppingService.quantityItemsChanged$.subscribe(
      quantityItems => this.itemsOrder = quantityItems.toString()
    );
  }

  toggleCart(): void {
    if (!location.pathname.includes('(popup:cart')) {
      this.router.navigate([{ outlets: { popup: ['cart'] } }])
        .then(() => console.log('open popup'));
    } else {
      this.router.navigate([{outlets: {popup: null }}])
        .then(() => console.log('close popup'));
    }
  }

  signOut(): void {
    this.authService.username = undefined;
    this.cartShoppingService.clearCart();
    this.router.navigate(['/']);
  }
}
