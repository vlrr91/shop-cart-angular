import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { PopupCartComponent } from './popup-cart.component';

@NgModule({
  declarations: [PopupCartComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'cart',
        component: PopupCartComponent,
        outlet: 'popup'
      }
    ]),
  ]
})
export class PopupCartModule { }
