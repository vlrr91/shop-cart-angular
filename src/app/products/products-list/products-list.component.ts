import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductService } from '../product.service';
import { Product } from '../../shared/interfaces';
import {CartShoppingService} from '../../core/services/cart-shopping.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  filteredProducts: Product[];
  searchCtrl: FormControl;
  firstTimeAddProduct: boolean = false;

  constructor(private productService: ProductService,
              private cartShoppingService: CartShoppingService,
              private snackBar: MatSnackBar) {
    this.searchCtrl = new FormControl('');
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.performFilter(this.searchCtrl.value);
      }
    );
    this.searchCtrl.valueChanges.subscribe(
      value => this.filteredProducts = this.performFilter(value)
    );
  }

  performFilter(filterBy: string): Product[] {
    filterBy = this.sanitizeSearch(filterBy);
    return this.products.filter((product: Product) =>
      this.sanitizeSearch(product.productName).indexOf(filterBy) !== -1);
  }

  sanitizeSearch(text: string): string {
    return text.toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  addProduct(product: Product) {
    this.snackBarAddProduct();
    this.cartShoppingService.addItem(product, 1);
  }

  snackBarAddProduct(): void {
    this.snackBar.open('Producto agregado!!', 'OK', {
      duration: 2500,
    });
  }
}
