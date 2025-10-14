import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLugares } from './header-lugares';

describe('HeaderLugares', () => {
  let component: HeaderLugares;
  let fixture: ComponentFixture<HeaderLugares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLugares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLugares);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
