import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEquipmentRental } from './event-equipment-rental';

describe('EventEquipmentRental', () => {
  let component: EventEquipmentRental;
  let fixture: ComponentFixture<EventEquipmentRental>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEquipmentRental],
    }).compileComponents();

    fixture = TestBed.createComponent(EventEquipmentRental);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
