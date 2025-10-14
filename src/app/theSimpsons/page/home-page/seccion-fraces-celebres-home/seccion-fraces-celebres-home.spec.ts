import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFracesCelebresHome } from './seccion-fraces-celebres-home';

describe('SeccionFracesCelebresHome', () => {
  let component: SeccionFracesCelebresHome;
  let fixture: ComponentFixture<SeccionFracesCelebresHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionFracesCelebresHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionFracesCelebresHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
