import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {ProductService} from '../product.service';
import {Product} from '../../shared/interfaces';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>;
  mouseEnter = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

}
