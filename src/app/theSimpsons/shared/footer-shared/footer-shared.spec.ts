import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterShared } from './footer-shared';

describe('FooterShared', () => {
  let component: FooterShared;
  let fixture: ComponentFixture<FooterShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterShared]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterShared);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
