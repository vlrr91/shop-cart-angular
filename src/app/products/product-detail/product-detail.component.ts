import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ProductService} from '../product.service';
import {Product, ProductResolved} from '../../shared/interfaces';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  errorMessage: string;
  pageTitle: string;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

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
  }
}
