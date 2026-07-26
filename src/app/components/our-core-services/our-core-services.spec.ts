import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCoreServices } from './our-core-services';

describe('OurCoreServices', () => {
  let component: OurCoreServices;
  let fixture: ComponentFixture<OurCoreServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCoreServices],
    }).compileComponents();

    fixture = TestBed.createComponent(OurCoreServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
