import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateBuffetCatering } from './corporate-buffet-catering';

describe('CorporateBuffetCatering', () => {
  let component: CorporateBuffetCatering;
  let fixture: ComponentFixture<CorporateBuffetCatering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateBuffetCatering],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateBuffetCatering);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
