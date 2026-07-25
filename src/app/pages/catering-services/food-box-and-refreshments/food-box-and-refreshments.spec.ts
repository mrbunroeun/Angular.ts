import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBoxAndRefreshments } from './food-box-and-refreshments';

describe('FoodBoxAndRefreshments', () => {
  let component: FoodBoxAndRefreshments;
  let fixture: ComponentFixture<FoodBoxAndRefreshments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodBoxAndRefreshments],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodBoxAndRefreshments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
