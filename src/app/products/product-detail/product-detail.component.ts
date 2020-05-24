import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import {ProductService} from '../product.service';
import {Product, ProductResolved} from '../../shared/interfaces';
import {CartShoppingService} from '../../core/services/cart-shopping.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  errorMessage: string;
  pageTitle: string;
  totalPrice: number;
  productQuantityCtrl: FormControl;

  constructor(private route: ActivatedRoute,
              private cartShoppingService: CartShoppingService,
              private snackBar: MatSnackBar) {
    this.productQuantityCtrl = new FormControl('1', [Validators.required, Validators.min(1)]);
  }

  ngOnInit(): void {
    const resolvedData: ProductResolved = this.route.snapshot.data.resolvedData;
    this.errorMessage = resolvedData.error;
    this.onProductRetrieved(resolvedData.product);
  }

  onProductRetrieved(product: Product): void {
    this.product = product;
    this.pageTitle = this.product
      ? `Detalles del producto: ${this.product.productName}`
      : 'Producto no encontrado';
    this.totalPrice = this.product.price;
    this.productQuantityCtrl.valueChanges.subscribe(
      value => this.calcTotalPrice(+value)
    );
  }

  calcTotalPrice(quantity: number) {
    if (quantity < 1 || quantity === null) {
      this.totalPrice = this.product.price;
    } else {
      this.totalPrice = this.product.price * quantity;
    }
  }

  addProduct(): void {
    if (this.productQuantityCtrl.valid) {
      this.snackBarAddProduct();
      this.cartShoppingService.addItem(this.product, +this.productQuantityCtrl.value);
    } else {
      this.productQuantityCtrl.markAllAsTouched();
    }
  }

  snackBarAddProduct(): void {
    this.snackBar.open('Agregado al carrito!!', 'OK', {
      duration: 2500,
    });
  }
}
