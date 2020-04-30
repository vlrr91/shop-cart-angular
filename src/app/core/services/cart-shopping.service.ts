import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { OrderItem, Product } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartShoppingService {
  order: OrderItem[] = [];
  quantityItems = 0;

  private orderBehaviorSubject$ = new BehaviorSubject<OrderItem[]>(this.order);
  orderChanged$ = this.orderBehaviorSubject$.asObservable();

  private quantityItemsSubject$ = new Subject<number>();
  quantityItemsChanged$ = this.quantityItemsSubject$.asObservable();

  addItem(product: Product, quantity: number): void {
    const index = this.order.findIndex(item => item.product.productName === product.productName);
    if (index === -1) {
      const newOrderItem: OrderItem = {
        product,
        quantity,
        totalPrice: product.price * quantity
      };
      this.order = [...this.order, newOrderItem];
      this.orderBehaviorSubject$.next(this.order);
    } else {
      this.order[index].quantity += quantity;
      this.order[index].totalPrice += product.price * quantity;
      this.orderBehaviorSubject$.next(this.order);
    }

    this.quantityItems += quantity;
    this.quantityItemsSubject$.next(this.quantityItems);
  }

  setOrder(quantity: number, product: Product): void {
    if (isNaN(quantity) || quantity < 1) {
      return;
    }
    const index = this.order.findIndex(item => item.product.id === product.id);

    const oldQuantity = this.order[index].quantity;

    this.order[index].quantity = quantity;
    this.order[index].totalPrice = product.price * quantity;
    this.orderBehaviorSubject$.next(this.order);

    this.quantityItems += quantity - oldQuantity;
    this.quantityItemsSubject$.next(this.quantityItems);
  }

  deleteItem(productId: number): void {
    const index = this.order.findIndex(item => item.product.id === productId);
    const quantity = this.order[index].quantity;

    this.order.splice(index, 1);
    this.quantityItemsSubject$.next(this.quantityItems);

    this.quantityItems -=  quantity;
    this.quantityItemsSubject$.next(this.quantityItems);
  }

  clearCart(): void {
    this.order = [];
    this.orderBehaviorSubject$.next(this.order);

    this.quantityItems = 0;
    this.quantityItemsSubject$.next(this.quantityItems);
  }
}
