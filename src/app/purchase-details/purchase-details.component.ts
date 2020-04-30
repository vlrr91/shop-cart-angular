import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import {CartShoppingService} from '../core/services/cart-shopping.service';
import {OrderItem} from '../shared/interfaces';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.scss']
})
export class PurchaseDetailsComponent implements OnInit {
  order: OrderItem[];
  totalPrice: number;

  constructor(private cartShoppingService: CartShoppingService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.cartShoppingService.orderChanged$.subscribe(
      order => {
        this.order = order;
        this.totalPrice = this.calcOrderPrice();
      }
    );
  }

  calcOrderPrice(): number {
    return this.order.map(item => item.totalPrice)
      .reduce((a, b) => a + b, 0);
  }

  confirm(): void {
    this.snackBar.open('Compra realizada con exito!!', 'OK', {
      duration: 2500,
    }).afterOpened().subscribe(
      () => {
        this.cartShoppingService.clearCart();
        this.router.navigate(['/']);
      }
    );
  }
}
