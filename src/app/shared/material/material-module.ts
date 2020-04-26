import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MaterialElevationDirective } from './material-elevation.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatInputModule,
];

@NgModule({
  declarations: [MaterialElevationDirective],
  imports: [
    materialModules
  ],
  exports: [materialModules, MaterialElevationDirective]
})
export class MaterialModule { }
