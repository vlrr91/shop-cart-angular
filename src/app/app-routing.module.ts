import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {AuthGuard} from './core/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/product.module').then(m => m.ProductModule)
  },
  {
    path: 'cart-details',
    loadChildren: () =>
      import('./cart-details/cart-details.module').then(m => m.CartDetailsModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'purchase-details',
    loadChildren: () =>
      import('./purchase-details/purchase-details.module').then(m => m.PurchaseDetailsModule),
      canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
