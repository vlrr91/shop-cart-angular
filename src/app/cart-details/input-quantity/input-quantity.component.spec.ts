import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQuantityComponent } from './input-quantity.component';

describe('InputQuantityComponent', () => {
  let component: InputQuantityComponent;
  let fixture: ComponentFixture<InputQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
