import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenCateringServices } from './canteen-catering-services';

describe('CanteenCateringServices', () => {
  let component: CanteenCateringServices;
  let fixture: ComponentFixture<CanteenCateringServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanteenCateringServices],
    }).compileComponents();

    fixture = TestBed.createComponent(CanteenCateringServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
