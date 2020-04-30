import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { CartDetailsComponent } from './cart-details.component';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';

@NgModule({
  declarations: [CartDetailsComponent, InputQuantityComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartDetailsComponent
      }
    ])
  ]
})
export class CartDetailsModule { }
