import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) { }

  private static handleError(err: any) {
    console.error(err);

    if (err.error instanceof ErrorEvent) {
      // A client side or network error occurred
      return throwError(`A ocurrido un error ${err.error.message}`);
    }
    // The backend returned an unsuccessful response code
    return throwError(`Servicio web retorna código ${err.status}: ${err.body.error}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        catchError(ProductService.handleError)
      );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`)
      .pipe(
        catchError(ProductService.handleError)
      );
  }
}
