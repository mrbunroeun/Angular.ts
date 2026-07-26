import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestEventDetail } from './latest-event-detail';

describe('LatestEventDetail', () => {
  let component: LatestEventDetail;
  let fixture: ComponentFixture<LatestEventDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestEventDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(LatestEventDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
