import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFamiliaHome } from './seccion-familia-home';

describe('SeccionFamiliaHome', () => {
  let component: SeccionFamiliaHome;
  let fixture: ComponentFixture<SeccionFamiliaHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionFamiliaHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionFamiliaHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
