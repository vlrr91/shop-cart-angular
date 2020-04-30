import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PurchaseDetailsComponent } from './purchase-details.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [PurchaseDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PurchaseDetailsComponent
      }
    ])
  ]
})
export class PurchaseDetailsModule { }
