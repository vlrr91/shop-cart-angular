import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { CartShoppingService } from '../core/services/cart-shopping.service';
import { OrderItem, Product } from '../shared/interfaces';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit, OnDestroy {
  order: OrderItem[];
  sub: Subscription;
  totalOrder: number;
  errorsInputs: any = {};
  errorMessage: string;

  constructor(private cartShoppingService: CartShoppingService,
              private router: Router) {
  }

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

  quantityChanged(event: any, product: Product): void {
    const key = event.id.toString();
    this.errorsInputs[key] = event.value;
    this.cartShoppingService.setOrder(+event.value, product);
  }

  deleteItem(id: number) {
    this.cartShoppingService.deleteItem(id);
    this.totalOrder = this.calcOrderPrice();
  }

  goToPurchase(): void {
    for (const key in this.errorsInputs) {
      if (this.errorsInputs[key] === null || this.errorsInputs[key] < 1) {
        this.errorMessage = 'Válida las cantidades de los productos';
        return;
      }
    }
    this.errorMessage = null;
    this.router.navigate(['/purchase-details']);
  }
}
