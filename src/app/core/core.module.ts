import { NgModule } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NavbarComponent, NotFoundComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [NavbarComponent, NotFoundComponent]
})
export class CoreModule { }
