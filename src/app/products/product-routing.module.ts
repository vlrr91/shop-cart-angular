import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductDetailResolved } from './product-detail/product-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    resolve: { resolvedData: ProductDetailResolved }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
