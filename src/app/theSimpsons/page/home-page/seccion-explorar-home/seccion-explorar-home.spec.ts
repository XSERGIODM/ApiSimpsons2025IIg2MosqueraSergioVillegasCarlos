import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionExplorarHome } from './seccion-explorar-home';

describe('SeccionExplorarHome', () => {
  let component: SeccionExplorarHome;
  let fixture: ComponentFixture<SeccionExplorarHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionExplorarHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionExplorarHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
