import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionInformacionGeneralHome } from './seccion-informacion-general-home';

describe('SeccionInformacionGeneralHome', () => {
  let component: SeccionInformacionGeneralHome;
  let fixture: ComponentFixture<SeccionInformacionGeneralHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionInformacionGeneralHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionInformacionGeneralHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
