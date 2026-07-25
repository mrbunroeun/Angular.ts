import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestEvent } from './latest-event';

describe('LatestEvent', () => {
  let component: LatestEvent;
  let fixture: ComponentFixture<LatestEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestEvent],
    }).compileComponents();

    fixture = TestBed.createComponent(LatestEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
