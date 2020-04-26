import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductResolved } from '../../shared/interfaces';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolved implements Resolve<ProductResolved> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `El id del producto no es un número: ${id}`;
      console.error(message);
      return of({ product: null, error: message });
    }
    return this.productService.getProductById(+id)
      .pipe(
        map(product => ({ product })),
        catchError(error => {
          const message = `Error: ${error}`;
          console.log(error);
          return of({ product: null, error: message });
        })
      );
  }
}
