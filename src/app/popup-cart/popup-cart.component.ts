import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { CartShoppingService } from '../core/services/cart-shopping.service';
import { OrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-popup-cart',
  templateUrl: './popup-cart.component.html',
  styleUrls: ['./popup-cart.component.scss']
})
export class PopupCartComponent implements OnInit, OnDestroy {
  order: OrderItem[];
  sub: Subscription;
  totalOrder: number;

  constructor(private cartShoppingService: CartShoppingService,
              private router: Router) { }

  ngOnInit(): void {
    this.sub = this.cartShoppingService.orderChanged$.subscribe(
      order => {
        this.order = order;
        this.totalOrder = this.calcOrderPrice();
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  calcOrderPrice(): number {
    return this.order.map(item => item.totalPrice)
      .reduce((a, b) => a + b, 0);
  }

  goToCart(): void {
    this.router.navigate([{ outlets: { primary: ['cart-details'], popup: null }}]);
  }

  goToPurchase(): void {
    this.router.navigate([{ outlets: { primary: ['purchase-details'], popup: null }}]);
  }
}
