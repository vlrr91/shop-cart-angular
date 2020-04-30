import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss']
})
export class InputQuantityComponent implements OnInit, OnDestroy {
  @Input() quantity: string;
  @Input() id: number;
  @Output() quantityChanged = new EventEmitter<any>();

  quantityCtrl: FormControl;
  inputSub: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.quantityCtrl = new FormControl(this.quantity, [Validators.required, Validators.min(1)]);
    this.inputSub = this.quantityCtrl.valueChanges
      .pipe(
        debounceTime(100)
      )
      .subscribe(
        value => {
          if (value === null || value < 1) {
            this.quantityCtrl.markAllAsTouched();
          }
          this.quantityChanged.emit({ id: this.id, value });
        }
      );
  }

  ngOnDestroy(): void {
    this.inputSub.unsubscribe();
  }
}
