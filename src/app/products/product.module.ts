import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
