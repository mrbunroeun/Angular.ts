import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCatering } from './mobile-catering';

describe('MobileCatering', () => {
  let component: MobileCatering;
  let fixture: ComponentFixture<MobileCatering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileCatering],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileCatering);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
