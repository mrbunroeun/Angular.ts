import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPackage } from './products-package';

describe('ProductsPackage', () => {
  let component: ProductsPackage;
  let fixture: ComponentFixture<ProductsPackage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPackage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPackage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
